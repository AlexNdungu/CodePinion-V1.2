//Get All the dir navigation buttons
let all_dir_nav_btns = document.getElementsByClassName('the_clickable_and_inner_dir');
//Get all dir names
let all_dir_names = document.getElementsByClassName('clickable_directory_name');
//Get the CSRF token
let csrf = document.getElementsByName('csrfmiddlewaretoken');

//Click event to the navigation buttons ssh
for(let nav = 0; nav < all_dir_nav_btns.length; nav++ ){

    all_dir_nav_btns[nav].addEventListener('click', ()=> {

        //console.log(all_dir_names[nav].innerHTML)

        //Build The Intented path

        //The current ssh dir
        let current_dir_path = document.getElementById('current_directory_ssh_dispayer').innerHTML;

        let intended_dir_path = current_dir_path + "\\" + all_dir_names[nav].innerHTML;

        console.log(intended_dir_path)

        //First we create form data
        let formData = new FormData();

        //Append the csrf token
        formData.append('csrfmiddlewaretoken', csrf[0].value);

        //Append hostname,username and password
        formData.append('intended_path',intended_dir_path);

        $.ajax({
            type:'POST',
            url:'/cdDir/',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response){

                //On success

                console.log(response)


            },
            error: function(error){

                
            }
        });    

        });

};