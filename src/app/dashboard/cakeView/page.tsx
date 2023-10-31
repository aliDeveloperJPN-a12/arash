'use client';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { ordered, restocked } from '@/features/cake/cakeSlice';

export default function CakeView() {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(1))}>Restock Cakes</button>
    </div>
  );
}
