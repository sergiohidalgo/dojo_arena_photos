$(document).ready(function () {

  function showDisplay(display) {
    if (display === 'select-arena') {
      $('#selectArena').css({display: 'block'})
      $('#selectPlayers').css({display: 'none'})
    } else if (display === 'select-players') {
      $('#selectPlayers').css({display: 'block'})
      $('#selectArena').css({display: 'none'})
    }
  }

  showDisplay('select-arena')

  $('.buttons button')
    .hover(function () {
      $('body > .bg').css({
        backgroundImage: 'url("images/' + $(this).data('value') + '.jpg")'
      })
    }).click(function () {
    showDisplay('select-players')
  })

  $('#selectorNinjaLeft').change(function () {
    $('#ninjaLeft').css({
      backgroundImage: 'url("images/' + $(this).val() + '.png")'
    })
  })

  $('#selectorNinjaRight').change(function () {
    $('#ninjaRight').css({
      backgroundImage: 'url("images/' + $(this).val() + '.png")'
    })
  })

})
