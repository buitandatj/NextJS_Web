"use client"
import { addToCart } from '@/redux/cartSlice'
import { IProducts } from '@/type/IProducts'
import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import { stylesBtnAdd } from '@/styles/styleComponentButton'

const AddToCartBtn = (props: { data: IProducts | any }) => {
    const data = props.data
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(addToCart({ ...data, count: 1 }))} className=' bg-black h-12 mt-10 flex items-center justify-center  text-[#ffffff] cursor-pointer'>
            <Button title='Add to cart' BtnStyles={stylesBtnAdd} />
        </div>
    )
}

export default AddToCartBtn