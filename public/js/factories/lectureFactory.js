/**
 * Created by lschubert on 10/24/15.
 * used for the making and retrieving of lectures
 */

'use strict';

app.factory('lectureMake', lectureFactory);


lectureFactory.$inject = ['$http', '$window'];

function lectureFactory($http, $window){
    var lectureMake = {};
    lectureMake.submitLecture = function(lecture){
        return $http.post("/lecture",lecture).success(function(data){
                alert("Lecture submitted successfully!");
            }
        );
    }

    //get lecture by id

    return lectureMake;
};