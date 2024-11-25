$(function() {
  //1st exercise
  $('#toggleButton').on('click', function () {
    $('#myParagraph').toggle()
  })

  //2nd exercise
  $('#colorButton').on('click', function () {
    $('#colorDiv').css({
      backgroundColor: 'yellow'
    })
  })

  //3rd exercise
  $('#addClassButton').on('click', function() {
    $('#classDiv').addClass("randomClass")
  })

  $('#removeClassButton').on('click', function () {
    $('#classDiv').removeClass("randomClass ")
  })

  //4th
  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn()
  })

  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut()
  })

  //5th
  $('#slideUpButton').on('click', function() {
    $('#slideDiv').slideUp()
  })

  $('#slideUpButton').on('click', function() {
    $('#slideDiv').slideDown()
  })
})
