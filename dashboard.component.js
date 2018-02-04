angular
.module('moose.dashboard')
.component('mooseDashboard', {
    controller: DashboardController,
    templateUrl: 'app/modules/dashboard/dashboard.component.html'
});

function DashboardController() {
var ctrl = this;

ctrl.$onInit = function() {
    ctrl.user = {
        fullName: 'Hallo Welt'
    }
    ctrl.getAllProducts();
};

ctrl.products = [];
ctrl.searchText = "";
ctrl.category = 1;
ctrl.currentPage = 0;
ctrl.pageSize = 10;
ctrl.sort = "";
var imageUrl= "https://www.real.de/lebensmittelshop/images";
ctrl.productUrl = "https://api.efood.real.de/api/v2/real/products/search?query="
ctrl.getAllProducts = function () {
    ctrl.productUrl = ctrl.productUrl + ctrl.searchText + ":" + ctrl.sort + ":" + ctrl.category + "&currentPage=" + ctrl.currentPage + "&pageSize=" + ctrl.pageSize;
    $http.get(ctrl.productUrl)
            .then(function (response)  {
            console.log(response);
                 //  $scope.products  =  response.data;
                 ctrl.products = [];
                  response.data.array.forEach(function(element) {
                    var product = new Object();
                    product.description = element.description;
                    product.url = imageUrl + element.url;
                    ctrl.products.push(product);
                }, this);
            });
}


}