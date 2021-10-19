require('./server');
const Person = require('./person')


const personn = new Person ({ 
    name: 'Youssef',
    age: 19,
    favoriteFoods: ['Pizza'] 
})

personn.save( function (err,persons){
if(err) {console.log('Error')}else{

  console.log('Saved ')
  console.log(persons)
}
})

const arrayOfPeople = [
    { name: "jesser", age: 19, favoriteFoods: ["lablebi"] },
    { name: "adem", age: 20, favoriteFoods: ["kafteji"] },
    { name: "oussema", age: 19, favoriteFoods: ["lasagne"] },
  ];
  
Person.create(arrayOfPeople,(err,persons)=>{
  if(err){console.log('Error')}else{
    console.log('Added')
    console.log(persons)
  }
})
Person.find({ name: 'adem' }, (err, persons) => {
  if (err) {
      console.log("Error");
  } else {
      console.log("Done ");
      console.log(persons);
  }
})

Person.findOne({favoriteFoods : 'lasagne'},(err,persons)=>{
  if (err) {
    console.log("Error");
} else {
    console.log("Done");
    console.log(persons);
}
})

Person.findById('id', (err, persons) =>{
  if (err) {
      console.log("Error");
  } else {
      console.log("Done");
      console.log(persons);
  }
}

);


Person.findById('id',(err,data)=>{
  if (err) return console.log(err);
  data.favoriteFoods.push('hamburger');
  data.save((err, persons) =>
  {
      if (err) {
          console.log("Error");
      } else {
          console.log("Done");
          console.log(persons);
      }
   }
  );
}) 
Person.findOneAndUpdate({name : "oussema"},{$set: {age :20}}, {new : true},
(err, persons) => {
  if (err) {
      console.log("Error");
  } else {
      console.log("Updated");
      console.log(persons);
  }
});

Person.findByIdAndRemove('id', (err, persons) =>
{
    if (err){
        console.log('Error')
    }
    else{
        console.log('Deleted');
        console.log(persons);
    }

}
); 
Person.remove({ name: 'jesser' }, (err, persons) =>
{
 if (err){
     console.log('Error')
 }
 else{
     console.log('Deleted');
     console.log(persons);
 }

});
Person.find({ favoriteFoods: "burrito" })
.sort({ name: 1 })
.limit(2)
.select({ age: 0 })
.exec((err, persons) =>
{
   if (err){
       console.log('Error')
   }
   else{
       console.log('Done');
       console.log(persons);
   }

}
);   