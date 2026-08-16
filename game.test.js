import {describe,it,expect} from 'vitest';import {moveCourier,hitsCone,deliveryStatus} from './game.js';
describe('delivery',()=>{it('stays on map',()=>expect(moveCourier({x:0,y:0},-1,0).x).toBe(0));it('detects cones',()=>expect(hitsCone({x:2,y:3},[[2,3]])).toBe(true));it('delivers at goal',()=>expect(deliveryStatus({x:9,y:9},[9,9],3)).toBe('delivered'))});
