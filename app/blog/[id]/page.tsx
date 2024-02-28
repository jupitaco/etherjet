'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { blogData } from '@/components/blogData';
import Image from 'next/image';
import styles from './ReadMore.module.scss';
import { images } from '@/exports/images';
import Link from 'next/link';

function ReadMore() {
  const { id } = useParams();

  const articleToRead = blogData.find((item) => item.id.toString() === id);

  const youMightLike = blogData.filter((item) => item.id.toString() !== id);

  return (
    <main className={`${styles.readMore}  my-5`}>
      <section className='container'>
        <h2 className='text-center my-5'>{articleToRead.title}</h2>

        <div className='d-flex flex-column'>
          <figure className={styles.banner}>
            <Image src={articleToRead.imageUrl} alt={articleToRead.title} />
          </figure>

          <div className='d-flex col-12 align-items-center mt-3'>
            <figure className='col-2 col-md-1'>
              <Image
                className='col-8 col-md-9'
                src={articleToRead.authorImageUlr}
                alt={articleToRead.authorName}
              />
            </figure>

            <div className='d-flex flex-column flex-md-row justify-content-between col-12 col-md-11 '>
              <div className='d-flex align-items-center gap-2 col-10 col-md-10'>
                <h6>Written by {articleToRead.authorName}</h6>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='11'
                  viewBox='0 0 10 11'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.5 7.93492V4.12842H9.5V7.96542C9.5 9.53492 8.51207 10.4999 6.93139 10.4999H3.06367C1.4978 10.4999 0.5 9.51492 0.5 7.93492ZM2.97969 6.70492C2.75247 6.71542 2.56476 6.53492 2.55488 6.30542C2.55488 6.07542 2.73271 5.88542 2.95993 5.87492C3.18222 5.87492 3.36498 6.05042 3.36992 6.27492C3.3798 6.50542 3.20198 6.69542 2.97969 6.70492ZM5.00988 6.70492C4.78266 6.71542 4.59495 6.53492 4.58507 6.30542C4.58507 6.07542 4.7629 5.88542 4.99012 5.87492C5.2124 5.87492 5.39517 6.05042 5.40011 6.27492C5.40999 6.50542 5.23216 6.69542 5.00988 6.70492ZM7.02525 8.54492C6.79802 8.53992 6.61526 8.34992 6.61526 8.11992C6.61032 7.88992 6.79308 7.70042 7.02031 7.69542H7.02525C7.25741 7.69542 7.44512 7.88542 7.44512 8.11992C7.44512 8.35492 7.25741 8.54492 7.02525 8.54492ZM4.58507 8.11992C4.59495 8.34992 4.78266 8.53042 5.00988 8.51992C5.23216 8.51042 5.40999 8.32042 5.40011 8.09042C5.39517 7.86542 5.2124 7.68992 4.99012 7.68992C4.7629 7.70042 4.58507 7.88992 4.58507 8.11992ZM2.54995 8.11992C2.55982 8.34992 2.74753 8.53042 2.97475 8.51992C3.19704 8.51042 3.37486 8.32042 3.36498 8.09042C3.36004 7.86542 3.17728 7.68992 2.95499 7.68992C2.72777 7.70042 2.54995 7.88992 2.54995 8.11992ZM6.6202 6.30042C6.6202 6.07042 6.79802 5.88542 7.02525 5.88042C7.24753 5.88042 7.42536 6.05992 7.43524 6.28042C7.44018 6.51042 7.26235 6.70042 7.04007 6.70492C6.81284 6.70992 6.62514 6.53492 6.6202 6.30542V6.30042Z'
                    fill='#212121'
                  />
                  <path
                    opacity='0.4'
                    d='M0.501465 4.12837C0.507886 3.83487 0.532584 3.25237 0.579017 3.06487C0.816119 2.01037 1.62128 1.34037 2.77221 1.24487H7.22775C8.36881 1.34537 9.18385 2.01987 9.42095 3.06487C9.46689 3.24737 9.49159 3.83437 9.49801 4.12837H0.501465Z'
                    fill='#212121'
                  />
                  <path
                    d='M3.15232 2.795C3.36967 2.795 3.53268 2.6305 3.53268 2.41V0.8855C3.53268 0.665 3.36967 0.5 3.15232 0.5C2.93498 0.5 2.77197 0.665 2.77197 0.8855V2.41C2.77197 2.6305 2.93498 2.795 3.15232 2.795Z'
                    fill='#212121'
                  />
                  <path
                    d='M6.84764 2.795C7.06004 2.795 7.22799 2.6305 7.22799 2.41V0.8855C7.22799 0.665 7.06004 0.5 6.84764 0.5C6.63029 0.5 6.46729 0.665 6.46729 0.8855V2.41C6.46729 2.6305 6.63029 2.795 6.84764 2.795Z'
                    fill='#212121'
                  />
                </svg>

                <h6> Jan 10, 2024 </h6>
                <h6 className='ms-0 ms-md-2'> ∙ 3 min read</h6>
              </div>
              <div className='d-flex gap-1 mt-1 mt-md-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <g clipPath='url(#clip0_2801_6083)'>
                    <path
                      d='M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z'
                      fill='#1DA1F2'
                    />
                    <path
                      d='M4.68488 8.75C7.30665 8.75 8.7404 6.6342 8.7404 4.79946C8.7404 4.73937 8.73915 4.67956 8.73636 4.62C9.01534 4.42336 9.25611 4.17989 9.44737 3.90101C9.19197 4.01161 8.91714 4.08606 8.62882 4.11962C8.92311 3.94773 9.14903 3.6758 9.25562 3.35165C8.97582 3.51334 8.66972 3.62732 8.35052 3.68868C8.09042 3.41879 7.72011 3.25 7.31008 3.25C6.52294 3.25 5.88462 3.8718 5.88462 4.63827C5.88462 4.74724 5.89715 4.8532 5.92161 4.95486C4.73695 4.8968 3.68649 4.34429 2.98346 3.50418C2.85684 3.71608 2.79024 3.9569 2.79046 4.20205C2.79046 4.68377 3.04209 5.10901 3.42476 5.35781C3.19841 5.35107 2.97702 5.29152 2.77922 5.18414C2.77901 5.18997 2.77901 5.19565 2.77901 5.20188C2.77901 5.8743 3.27032 6.43572 3.92253 6.56294C3.80004 6.59543 3.67364 6.61186 3.54668 6.61179C3.45499 6.61179 3.36564 6.60301 3.2788 6.58677C3.46026 7.13844 3.98645 7.5399 4.61032 7.55112C4.12246 7.9236 3.50792 8.14545 2.84 8.14545C2.72638 8.14555 2.61285 8.13912 2.5 8.12622C3.13083 8.52009 3.8798 8.75 4.68488 8.75Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_2801_6083'>
                      <rect width='12' height='12' fill='white' />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <g clipPath='url(#clip0_2801_6085)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6 0C9.3137 0 12 2.6863 12 6C12 9.3137 9.3137 12 6 12C2.6863 12 0 9.3137 0 6C0 2.6863 2.6863 0 6 0Z'
                      fill='url(#paint0_linear_2801_6085)'
                    />
                    <path
                      d='M6.7796 11.9496V7.31512H8.08615L8.25935 5.68399H6.7796L6.7818 4.86754C6.7818 4.4421 6.82221 4.21426 7.43329 4.21426H8.25018V2.58285H6.94333C5.37358 2.58285 4.82115 3.37408 4.82115 4.70489V5.68412H3.84262V7.3154H4.82115V11.8839C5.20237 11.9599 5.59647 12 6 12C6.26068 12 6.52109 11.9832 6.7796 11.9496Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_2801_6085'
                      x1='6'
                      y1='-0.109326'
                      x2='6'
                      y2='12.5117'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#00B2FF' />
                      <stop offset='1' stopColor='#006AFF' />
                    </linearGradient>
                    <clipPath id='clip0_2801_6085'>
                      <rect width='12' height='12' fill='white' />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <g clipPath='url(#clip0_2801_6087)'>
                    <path
                      d='M5.99999 0C2.68626 0 0 2.68626 0 5.99999C0 9.31371 2.68626 12 5.99999 12C9.31371 12 12 9.31371 12 5.99999C12 2.68626 9.31366 0 5.99999 0ZM4.39918 8.90071H3.08182V4.6447H4.39918V8.90071ZM3.73422 4.08734C3.30399 4.08734 2.95521 3.73572 2.95521 3.30204C2.95521 2.86831 3.30404 2.51671 3.73422 2.51671C4.16441 2.51671 4.51319 2.86831 4.51319 3.30204C4.51322 3.73574 4.16443 4.08734 3.73422 4.08734ZM9.33598 8.90071H8.02501V6.66666C8.02501 6.05392 7.79226 5.71189 7.30775 5.71189C6.78045 5.71189 6.50498 6.06811 6.50498 6.66666V8.90071H5.24148V4.6447H6.50498V5.21791C6.50498 5.21791 6.88504 4.51488 7.78749 4.51488C8.68996 4.51488 9.336 5.06592 9.336 6.20586L9.33598 8.90071Z'
                      fill='url(#paint0_linear_2801_6087)'
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id='paint0_linear_2801_6087'
                      x1='1.75735'
                      y1='1.75735'
                      x2='10.2426'
                      y2='10.2426'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#2489BE' />
                      <stop offset='1' stopColor='#0575B3' />
                    </linearGradient>
                    <clipPath id='clip0_2801_6087'>
                      <rect width='12' height='12' fill='white' />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <g clipPath='url(#clip0_2801_6089)'>
                    <path
                      d='M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z'
                      fill='#59CE72'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.49074 3.48092C7.85905 2.84871 7.01896 2.50036 6.12393 2.5C4.27974 2.5 2.77879 4.00037 2.77805 5.84457C2.77781 6.43407 2.93188 7.00952 3.22466 7.51673L2.75 9.25L4.52369 8.78489C5.01238 9.05134 5.5626 9.19177 6.12259 9.19201H6.12396C7.96796 9.19201 9.46904 7.69145 9.46979 5.84724C9.47014 4.95351 9.12245 4.11314 8.49074 3.48092ZM6.12396 8.62708H6.12282C5.62382 8.62689 5.13438 8.49288 4.70742 8.23958L4.60586 8.17933L3.55334 8.45534L3.83428 7.42946L3.76815 7.32429C3.48978 6.88165 3.34275 6.37005 3.34297 5.84478C3.34358 4.31195 4.59111 3.06491 6.12506 3.06491C6.86784 3.06519 7.56608 3.35475 8.09113 3.88022C8.61618 4.4057 8.90517 5.10419 8.90488 5.84702C8.90425 7.37995 7.65673 8.62708 6.12396 8.62708ZM7.64936 6.54498C7.56575 6.50315 7.15473 6.30096 7.0781 6.27307C7.00147 6.24518 6.94574 6.23124 6.89 6.31491C6.83427 6.39857 6.67406 6.58683 6.62528 6.6426C6.57652 6.69838 6.52775 6.70536 6.44415 6.66352C6.36055 6.62169 6.09118 6.53344 5.77185 6.24871C5.52333 6.02712 5.35554 5.75341 5.30677 5.66975C5.25801 5.58608 5.30159 5.54084 5.34344 5.49918C5.38104 5.46173 5.42703 5.40157 5.46884 5.35276C5.51063 5.30396 5.52456 5.2691 5.55243 5.21332C5.5803 5.15754 5.56637 5.10873 5.54546 5.0669C5.52456 5.02507 5.35738 4.61371 5.2877 4.44638C5.21985 4.28341 5.15092 4.30546 5.0996 4.30291C5.05089 4.30048 4.9951 4.29996 4.93938 4.29996C4.88364 4.29996 4.79308 4.32088 4.71644 4.40454C4.63981 4.48821 4.42385 4.69041 4.42385 5.10176C4.42385 5.51312 4.72341 5.91053 4.76521 5.96631C4.80701 6.02209 5.35472 6.86626 6.19335 7.22826C6.39281 7.31437 6.54854 7.36578 6.66995 7.40433C6.87023 7.46791 7.05248 7.45894 7.19653 7.43743C7.35715 7.41344 7.69114 7.23524 7.76082 7.04002C7.83049 6.8448 7.83049 6.67747 7.80959 6.64261C7.78869 6.60775 7.73296 6.58682 7.64936 6.54498Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_2801_6089'>
                      <rect width='12' height='12' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='my-5'>{articleToRead.blogContent}</div>
      </section>

      <section className={styles.readyToJoin}>
        <article className='d-flex align-items-center col-12 py-4 px-3 p-md-5'>
          <div className='d-flex flex-column col-7 col-md-6'>
            <h2>Ready to Join the Celebration?</h2>
            <p className='d-none d-md-flex'>
              Unleash the power of cultural tradition and innovation in the palm
              of your hand. Experience the joy of money spraying, manage your
              bills, send cash gifts, and celebrate like never before.
            </p>
            <div className='d-flex flex-column flex-md-row gap-2 col-5 col-md-7 mt-3'>
              <figure>
                <Image src={images.appStoreWhite} alt='' />
              </figure>
              <figure>
                <Image src={images.googleStoreWhite} alt='' />
              </figure>
            </div>
          </div>

          <figure
            className={`${styles.blogPhone} col-5 col-md-4 col-lg-3 mx-auto `}
          >
            <Image src={images.blogPhone} alt='' />
          </figure>
        </article>
      </section>

      <section className={`container my-5 ${styles.mightLike}`}>
        <h3 className='mt-5'>You might also like </h3>
        <section className={`${styles.blogCardContainer}  my-5`}>
          {youMightLike
            .slice(0, 3)
            .map(
              ({
                id,
                title,
                authorImageUlr,
                authorName,
                read,
                date,
                imageUrl,
              }) => (
                <Link
                  href={`${id}`}
                  key={id}
                  className={`${styles.blogCard} d-flex  flex-column justify-content-around justify-content-md-between `}
                >
                  <div className='d-flex flex-row flex-md-column justify-content-between'>
                    <figure className='col-4 col-md-12'>
                      <Image src={imageUrl} alt='' />
                    </figure>
                    <div className='d-flex flex-column col-7 col-md-12 justify-content-between mt-0 mt-md-3'>
                      <h5>{title}</h5>
                      <p className='d-flex d-md-none'>Read more</p>{' '}
                    </div>{' '}
                  </div>

                  <div className='d-none d-md-flex justify-content-between align-items-center'>
                    <figure className='col-2'>
                      <Image src={authorImageUlr} alt='' />
                    </figure>
                    <div className='col-9 d-flex flex-column'>
                      <h6>{authorName}</h6>
                      <div className='d-flex justify-content-between'>
                        {' '}
                        <p>{date}</p> . <p>{read} </p>
                      </div>{' '}
                    </div>
                  </div>
                </Link>
              ),
            )}
        </section>
      </section>
    </main>
  );
}

export default ReadMore;
