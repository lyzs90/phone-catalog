angular
  .module('components.cart')
  .component('cart', {
    templateUrl: './cart.template.html',
    controller: CartController
  });

/**
 * @name CartController
 * @desc Controller for retrieving user profile in the cart
 * @ngInject
 */
function CartController(store, CartService, AuthService, $scope) {
  var vm = this;
  
  vm.$onInit = function () {
    AuthService.checkToken();

    vm.items = CartService.items;
    vm.removeItem = CartService.removeItem;
    vm.getTotal = CartService.getTotal;

    vm.profile = JSON.parse(store.get('profile'));
  };

  $scope.$watch(
    function() { return CartService.items; }, 
    function() {
      vm.items = CartService.items;
      vm.grandTotal = CartService.getTotal() * 105;  // in cents, inclusive of delivery
  });
}
