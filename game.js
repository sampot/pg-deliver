export function moveCourier(state,dx,dy){return {...state,x:Math.max(0,Math.min(9,state.x+dx)),y:Math.max(0,Math.min(9,state.y+dy))}}
export function hitsCone(state,cones){return cones.some(([x,y])=>x===state.x&&y===state.y)}
export function deliveryStatus(state,goal,time){return time<=0?'late':state.x===goal[0]&&state.y===goal[1]?'delivered':'driving'}
