import 'jest-preset-angular';

// HTML Template parsing using docType

Object.defineProperty(document, 'doctype', {

    value: '<!DOCTYPE html>'

});

Object.defineProperty(document.body.style, 'transform', {

    value: () => {

        return {

            enumerable: true,

            configurable: true

        };

    }
})