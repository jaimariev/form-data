$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(formData){


    var formHTML = ''
  
    formData.forEach(function(field){
      formHTML += `<i class="fa ${field.icon}"></i><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
    })
    $("#app").html(formHTML)
  })


})

