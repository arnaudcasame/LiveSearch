listApp.directive('loopIn', [function () {
    return {
        restrict: 'A',
        transclude: 'element',
        link: function (scope, el, attr, ctrl, transclude) {
            var pieces = attr.loopIn.split(' ');
            console.log(pieces);
            var itemString = pieces[0];
            var collectionName = pieces[2];
            var elements = [];



            scope.$watchCollection(collectionName, function (group) {
                var longueur = group.length;
                if (elements.length > 0) {
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].el.remove();
                        elements[i].scope.$destroy();
                    }
                    elements = [];
                }

                for (var j = 0; j < longueur; j++) {
                    var childScope = scope.$new();
                    childScope[itemString] = group[j];
                    transclude(childScope, function (shish) {
                        el.before(shish);
                        var item = {};
                        item.el = shish;
                        item.scope = childScope;
                        elements.push(item);
                    });
                }
            });
        }
    };
}]);