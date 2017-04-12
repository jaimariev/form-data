$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(formData){ 
    var formHTML = '' 
    formData.forEach(function(field){
      if(field.type ==='select'){ //so this is saying - if you're going through the data/array and find the type select then do below 
        formHTML += `<select id='${field.id}'>
        <option>${field.label}...</option>` 
        //above says - place what's in the nopostrophe in the variable formHTML - and everything that's in the nopostrophe would be what comes up in html - so essentially whatever goes in the nopostrophe would be html code. 
        field.options.forEach(function(lang){ //since this is in the same if statement of select - this is saying go through the options array and run the below.
          formHTML += `<option value="${lang.value}">${lang.label}</option>`
        }) 
        /*this is what it would look like if you wrote it out in html: 
        <select>
          <options>Select Language...</options>
          <options>English</options>
        </select>

        there's more options - but just as an example - that's what this is doing.
        */
        formHTML += `</select>`
      } 
      if(field.type === "textarea"){
        formHTML += `<i class="fa ${field.icon}"></i><textarea placeholder="${field.label}"></textarea>`
      } 
      if(field.type === 'text' || field.type === 'email' || field.type === 'tel') {
        formHTML += `<i class="fa ${field.icon}"></i><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
      }
    })
    $("#content").html(formHTML)
  })
})
