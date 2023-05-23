$(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });
 
    $(".time-block").each(function(){
      var hourNow = dayjs().hour()
      var hour = parseInt($(this).attr("id").split("-")[1])
      if (hour < hourNow) {
        $(this).addClass("past")
      }
      else if (hour === hourNow) {
        $(this).addClass("present")
      }
      else ($(this).addClass("future"))
      })

    $(".time-block").each(function(){
      var timeBlockId = $(this).attr("id");
      var savedInput = localStorage.getItem(timeBlockId)

      if (savedInput !== null) {
        $(this).find(".description").val(savedInput)
      }
    })
    
  $("#currentDay").text(dayjs().format("dddd, MMMM DD"));
});
