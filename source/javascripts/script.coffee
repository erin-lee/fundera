 # Author:
 #  Erin Lee
 #  email.erin@gmail.com
console.log 'hello'
do ($=jQuery)->
  $bizStartSection = $(".business-start-section")

  $(".js-toggle-hide").on "click", (e) ->
    e.preventDefault()
    hideSection = $(@).data("hide")
    if $bizStartSection.hasClass("trigger-hide")
      $bizStartSection.removeClass("trigger-hide")
      $(@).text("I haven't started my business yet.")
    else
      $bizStartSection.addClass("trigger-hide")
      $(@).text("Nevermind, I did start my business")
    $("#{hideSection}").slideToggle()

  $("input[name='credit_card']").on "click", ->
    if $(@).val() is "true"
      console.log 'true'
      $(@).parent().parent().addClass('show')
    else
      $(@).parent().parent().removeClass('show')

  $("#appliction").parsley()
