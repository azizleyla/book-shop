import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaHeart, FaMinus, FaPlus } from 'react-icons/fa'
import { SlBasket } from 'react-icons/sl'
import Img from "../../components/Data/Img"

const BookDetail = () => {
  return (
    <div className='container mx-auto'>
      <div
        className="rounded-md w-full bg-[#fff] py-9 px-4"
      
      >
    
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <Image
              width={600}
              height={600}
              src={Img.book1}
              alt=""
            />
          </div>

          <div>
            <p
              className={`${
                 "bg-[#12a05c]"
              } text-white p-1 px-4 whitespace-nowrap  rounded-2xl text-sm mb-6 w-32 flex items-center justify-center`}
            >
          Anbarda
            </p>
            <h1 className="text-3xl text-[#0f3178] mb-2">
            K."SİRR" Həyatımı Necə Dəyişdi (Rhonda Byrne)
            </h1>
            <h4 className=" text-[#0f3178] my-3">
              Müəllif:
              <span> Rhonda Bayren</span>
            </h4>
            <p className="text-[#ffc056] text-4xl">
              10.99
              <span> ₼</span>
            </p>
            <form  className="mt-4">
              <div>
                <label className="text-[#0f3178]">Miqdar</label>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center bg-[#EFF2F5] rounded-[60px] w-32 h-12 px-3">
                    <button>
                      <FaMinus className="text-[#5B6C8F] text-sm" />
                    </button>
                    <input
                      value="1"
                      className="bg-[#eff2f5] text-[#5B6C8F] text-center text-xl outline-none border-0 w-full pointer-events-none"
                      step="1"
                      type="number"
                    />
                    <button>
                      <FaPlus className="text-[#5B6C8F] text-sm" />
                    </button>
                  </div>
                  
                    <button className="bg-[#FF9923] text-white text-lg rounded-[60px] py-2 px-16 hover:opacity-90 flex items-center gap-4">
                      Səbətə at
                      <SlBasket className='font-bold' />
                    </button>
                
                </div>
              </div>
            </form>
            <div className="mt-8">
              <h4 className=" text-[#0f3178]">
                Məhsulun nömrəsi:
                <span className="text-[#5B6C8F]">
                     76878
                </span>
                <div className='mt-3 flex gap-2 items-center'>
                <button className='text-3xl text-[#ccc]'>
                  <FaHeart/>
                </button>
                <span>Sevimlilere elave et</span>
               
                </div>
              
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='text-[#828fa9] pb-7'>
        <h1 className='text-2xl text-underline mb-5'>Açıqlama</h1>
        <div className='p-7 border-[1px] border-[#efefef] '>
        <p>Sirr həyatımı necə dəyişdi. Həqiqi insanlar. Həqiqi əhvalatlar, Rhonda Byrne</p>
        <div className='my-7'>
          <p><p>Bu kitabda verilən məlumatlar yalnız maarifləndirici xarakter daşıyaraq, səhhətin korlanması zamanı diaqnostika, müalicə və ya hər hansı resept kimi nəzərdə tutulmamışdır. Bu məlumatlar peşəkar səhiyyə təşkilatlarının məsləhətləri ilə əvəz edilə bilməz. Kitabın məzmunundan istifadə, peşəkar səhiyyə təşkilatları tərəfindən verilən sağlamlıq proqramlarına vacib və səmərəli əlavə kimi məsləhət görülmüşdür.</p></p>
       <div className='mt-3'>
        <div className='mb-1'>
          <strong className='font-semibold'>Məhsulun kodu: </strong>
          <span>343874</span>
          </div>
          <div className='mb-1'>
          <strong>Müəllif: </strong>
          <span>Rhodan bayren</span>
          </div>
          <div className='mb-1'>
          <strong>Dil: </strong>
          <span>Azerbaycan</span>
          </div>
        <div className='mb-1'>
          <strong>Səhifə sayı: </strong>
          <span>365</span>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail