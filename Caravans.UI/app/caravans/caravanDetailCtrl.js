(function () {
    "use strict";

    angular
        .module("caravanAds")
        .controller("CaravanDetailCtrl", ["caravansResource", "$stateParams", CaravanDetailCtrl])
        .animation('.slide-animation', function () {
            return {
                addClass: function (element, className, done) {
                    if (className == 'ng-hide') {
                        TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });                  
                    }
                    else {
                        done();
                    }
                },
                removeClass: function (element, className, done) {
                    if (className == 'ng-hide') {
                        element.removeClass('ng-hide');

                        TweenMax.set(element, { left: element.parent().width() });
                        TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                    }
                    else {
                        done();
                    }
                }
            };
        });

    function CaravanDetailCtrl(caravansResource, $stateParams) {
        var vm = this;
        vm.caravanId = ($stateParams.caravanId) ? $stateParams.caravanId : 'OAG-AD-1183602';
        vm.selectedCaravan = {};
        vm.direction = 'left';
        vm.currentIndex = 0;
        vm.slides = [];


        function init() {
            caravansResource.get({ id: vm.caravanId }, function (data) {
                vm.selectedCaravan = data;
                vm.selectedCaravan.media.photos.forEach(function (photo) {
                    var slide = { image: '', description: '' };
                    slide.image = photo;
                    vm.slides.push(slide);
                });
            });
        }

        init();

        vm.setCurrentSlideIndex = function (index) {
            vm.direction = (index > vm.currentIndex) ? 'left' : 'right';
            vm.currentIndex = index;
        };

        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex === index;
        };

        vm.prevSlide = function () {
            vm.direction = 'left';
            vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
        };

        vm.nextSlide = function () {
            vm.direction = 'right';
            vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
        };

        vm.vehicleFilter = function (attribute) {
            return attribute.featureGroup === "Vehicle";
        };

        vm.productFilter = function (attribute) {
            return attribute.featureGroup === "Product Details";
        };

        vm.cabinFilter = function (attribute) {
            return attribute.featureGroup === "Cabin Features";
        };

    }
}());
