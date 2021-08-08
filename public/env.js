  const cardList = [
    {
        title: "Education",
        image: "https://scholarship-positions.com/wp-content/uploads/2017/06/Deakin-University-Postgraduate-Research-Scholarship.png",
        link: "Universities",
        desciption: "This is DEakin university"
    },
    {
        title: "Olympics 2021",
        image: "https://images.indianexpress.com/2021/07/Untitled-design-6.jpg",
        link: "News ",
        desciption: "Here find more info."
    }
]

const submitForm = () => {
  let formData = {};
  formData.title = $('#title').val();
  formData.image = $('#image').val();
  formData.link = $('#link').val();
  formData.description = $('#description').val();

  console.log("Project added successfully ", formData);
  cardList.push(formData)
  alert(result.message);
  location.reload();
}

const addCards = (items) => {
  items.forEach(item => {
      let itemToAppend = '<div class="col s4 center-align">'+
  '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
  '</div><div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
  '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
      '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
  });
}



$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#formSubmit').click(()=>{
      submitForm();
  })
  addCards(cardList);
  $('.modal').modal();
});

  
  console.log('test')
  $(document).ready(function(){
    console.log('Ready')

  
    //test get call
    $.get('/test?user_name="Fantastic User"',(result)=>{
      console.log(result)
    })
  
  
  })