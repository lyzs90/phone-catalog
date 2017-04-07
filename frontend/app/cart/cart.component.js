(function() {
  'use strict';

  angular
    .module('cart')
    .component('cart', {
      templateUrl: 'cart/cart.template.html',
      controller: CartController
    });

  /**
   * @name CartController
   * @desc Controller for retrieving user profile in the cart
   * @ngInject
   */
  function CartController(store) {
    var vm = this;
    vm.profile = JSON.parse(store.get('profile'));
  }
})();
