$(document).ready(function () {
  console.log(jQuery)
  $('button').click(function () {
    console.log("Button Clicked", this)
    // $('button').hide() //this will hide the button
    //$(this).hide()  //this will hide the button that is clicked
    //$('p').hide()  //this will hide the paragraph when any button is clicked
  })
  // $('button').click(); 
  // This will click the button automatically you or the user does not need to click the button
  // $('button:first').click();
  //This will click only the first button automatically

  // Events in jQuery
  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  // Using the "on" method
  $('button').on({
    click: function () {
      console.log("Button Clicked", this)
      // $('button').hide() //this will hide the button
      //$(this).hide()  //this will hide the button that is clicked
      //$('p').hide()  //this will hide the paragraph when any button is clicked
    }, mouseleave: function () {
      console.log("Mouse Leave")
    }
  }) // ***imp: when I use multiple event in one 'on' method I have to use comma to separate them and use curly braces to wrap them and use a colon after the event name  ***

  // This does the same thing just the syntax is different the previous syntax according to codeium is deprecated so we use this


  // $('#text').hide(5000, function () {
  //   console.log("Text Hidden")
  // });
  //this will hide the text after 5 seconds and the callback function will be executed after the text is hidden
  // $('#text').show(5000, function () {
  //   console.log("Text shown")
  // });
  //this will show the text after 5 seconds and the callback function will be executed after the text is hidden
  // hide and show can also be used as toggle
  $('#toggle').click(function () {
    $('#text').toggle(3000);
  })
  //We can also use this methods instead of toggle
  // fadeIn()
  // fadeOut()
  // fadeToggle()
  // fadeTo()

  // Slide
  $('#slideToggle').click(function () {
    $('#text').slideToggle(3000);
  })

  // .slideUp()
  // .slideDown()
  // .slideToggle()
  // .slideTo()
  // This are same as fade methods it takes time and callback function as arguments/parameters, speed and callback functions are optional in both of them

  // Animate
  $('#animate').click(function () {
    $('#text').animate({
      opacity: 0.5,
      marginTop: '50px',
      height: '100px',
      width: '100px'
    }, 3000, function () {
      console.log("Text animated")
    })
    // this will animate the element it takes 3 parameter object of properties, time and callback function 
    // time and callback function are optional 
    // We can also write slow and fast instead of time in this case which is3000

    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 1000);
    // $('#wiki').animate({ width: '350px' }, 12000);
    // If we write like this it will be executed one by one

    // This will stop the animation
    $('#stopAnimate').click(function () {
      $('#text').stop();
    }) 
  })

  // Ajax with jQuery
  //GET resquest

  $.get('https://jsonplaceholder.typicode.com/posts', function (data, status) {
    //The callback function has two parameters the data and the status
    //Data is the data that is returned from the server
    //Status is the status code
    console.log(data);
    console.log("Status: " + status);
  })

  //POST request

  // $.post('https://jsonplaceholder.typicode.com/posts', {title: 'foo', body: 'bar', userId: 1},function(data, status){
  //   console.log(data);
  //   alert("Status: " + status);
  // })

})
