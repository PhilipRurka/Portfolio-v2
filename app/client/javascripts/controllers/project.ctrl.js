'use strict';
app.controller('projectController', ['$scope', '$timeout',
  function($scope, $timeout) {
    /*************************************/
    /********** SCOPE VARIABLES **********/
    /*************************************/
    $scope.selectedProject = false;

    /*************************************/
    /********** SCOPE FUNCTIONS **********/
    /*************************************/

    /*************************************/
    /********** INIT FUNCTIONS **********/
    /*************************************/

    /**************************************/
    /********** JQUERY FUNCTIONS **********/
    /**************************************/
    $timeout(function () {
      $('.item-content').each(function() {
        $(this).on( "click", function() {
          var thisOne = $(this);
          if(!$(this).parent('.item').hasClass('selected-project')) {
            $('.project-content').addClass('showcase-project');
            $timeout(function () {
              $('.item').removeClass('selected-project');
              setTimeout(function () {
                thisOne.parent('.item').addClass('selected-project');
              }, 1);
            });
          }
        })
      });
    });

    /**************************/
    /********** JSON **********/
    /**************************/
    $scope.projects = [
      {
        title:        "IoT Place",
        img:          "winter.jpg",
        img_position: "34%",
        description:  "Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. Here is a description. ",
        contributors: ["Michael Rurka", "Kolton Gagnon"]
      },
      {
        title:            "TrainPic",
        img:              "waterfall.jpg",
        img_position:     "43%",
        description:      "Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! Bam Balam! ",
        contributors: ["Gordon Freeman", "John Freeman"]
      },
      {
        title:            "King PA",
        img:              "money.jpg",
        img_position:     "58%",
        description:      "Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. ",
        contributors: ["Combine Zombie Ghost", "Dark Man"]
      },
      {
        title:            "Space Monkey",
        img:              "space.jpg",
        img_position:     "58%",
        description:      "Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. Another stack of tex. ",
        contributors: ["Lying Cake", "Ditto"]
      }
    ]
  }
]);
