const Form=document.getElementById('form')
 

Form.addEventListener('submit',(e)=>{

    e.preventDefault();
let userName=document.getElementById('userName');
let userpassword=document.getElementById('password')


let gitUser=userName.value
let gitPassword=userpassword.value


console.log(gitUser)
console.log(gitPassword)
const token = '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';

fetch('https://api.github.com/user', {
  headers: {
    Authorization: `token ${token}`
  }
})
    .then(function(data){
    return data.json()
    })
  .then(function(data){
      console.log(data)
      userName.value=""
      userpassword.value=""

      if(data.message=="Bad credentials")
      alert('You are not an authorized User')
      else{
        var result = `<img class="img-thumbnail ml-4" width="100" height="100" src="${data.avatar_url}"/><br><h1>${data.login}</h1><br><a target="_blank" href="${data.html_url}"><button class="btn btn-success">See Profile</button></a>`
        $("#result").html(result)
      }
 

  })
           


 
})










