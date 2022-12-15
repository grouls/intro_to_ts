import 'reflect-metadata';

// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const color = Reflect.getMetadata('note', plane, 'color');

// console.log(color);
@controller
class Plane {
    color: string = 'red';
    
    @get('take off!')
    fly() : void {
        console.log('vrrr');
    }
};

function get(path: string) {
    return function(target: Plane, key: string): void{
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller(target: typeof Plane) {
    for(let key in target.prototype){
        const path = Reflect.getMetadata('path', target.prototype, key);
        console.log('🚀 ----------------------------------------------------------🚀');
        console.log('🚀 ~ file: metadata.ts:30 ~ controller ~ path', path);
        console.log('🚀 ----------------------------------------------------------🚀');
        // router.get(path, target.prototype[key]);
    }
}
