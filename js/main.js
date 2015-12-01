jQuery(document).ready(function() {
  $(".get-matches").click(function() {
    var setTitle = $(".subject-search").val();

    if (setTitle.length !== 0) {
      $(".select2-selection__rendered")[0].innerText = setTitle;
    } else {
      console.log("cannot be empty!");
    }
  });

  $(".get-grade").click(function() {
    var grade = $(this).text().trim();
    $("#student-grade")[0].innerText = grade;
  });

  $(".get-type").click(function() {
    var type = $(this).text().trim();
    $("#help-type")[0].innerText = type;
    var homeworkAdded = $("#homework-type")[0];
    if (homeworkAdded === undefined) {
      $('<li><a href="#" id ="homework-type" class="get-type">homework assignment</a></li>').appendTo($(".help-dropdown")[0]);
    }
  });

  $(".get-soon").click(function() {
    var soon = $(this).text().trim();
    $("#help-soon")[0].innerText = soon;
  });

  $(".get-late").click(function() {
    var soon = $(this).text().trim();
    $("#help-late")[0].innerText = soon;
  });

  $(".get-gender").click(function() {
    var gender = $(this).text().trim();
    $("#gender-pref")[0].innerText = gender;
    var unselected = $(".get-gender")[0].innerText;
    if (unselected !== 'female') {
      $(".get-gender")[0].innerText = 'female';
    } else {
      $(".get-gender")[0].innerText = 'male';
    }
  });

  $(".get-completed").click(function() {
    var completed = $(this).text().trim();
    $("#work-completed")[0].innerText = completed;
    var unselected = $(".get-completed")[0].innerText;
    if (unselected !== 'have') {
      $(".get-completed")[0].innerText = 'have';
    } else {
      $(".get-completed")[0].innerText = 'have not';
    }
  });

  $(".get-relationship").click(function() {
    var relationship = $(this).text().trim();
    $("#tutor-relationship")[0].innerText = relationship;
    var unselected = $(".get-relationship")[0].innerText;
    if (unselected !== 'one lesson') {
      $(".get-relationship")[0].innerText = 'one lesson';
    } else {
      $(".get-relationship")[0].innerText = 'recurring lessons';
    }
  });

  $(".get-authority").click(function() {
    var authority = $(this).text().trim();
    console.log(authority);
    $("#tutor-authority")[0].innerText = authority;
    // var selected = $(".get-authority")[0].innerText;
    // console.log(selected);
    if (authority ==='recent grad') {
      $(".get-authority.recent-grad")[0].innerText = 'college student';
      $(".get-authority.pro-tutor")[0].innerText = 'professional tutor';
    } else if (authority === 'professional tutor') {
      $(".get-authority.recent-grad")[0].innerText = 'recent grad';
      $(".get-authority.pro-tutor")[0].innerText = 'college student';
    } else if (authority === 'college student') {
      $(".get-authority.recent-grad")[0].innerText = 'recent grad';
      $(".get-authority.pro-tutor")[0].innerText = 'professional tutor';
    }
  });

  $(".get-goals").click(function() {
    var goal = $(this).text().trim();
    $("#tutoring-goal")[0].innerText = goal;
  });

});
