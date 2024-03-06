'use client';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { SVGProps } from 'react';
import { useGSAP } from '@gsap/react';
const FooterLines = (props: SVGProps<SVGSVGElement>) => {
  let container = useRef<any>(null);
  let ss = useRef<any>(null);

  useGSAP(
    () => {
      ss.current = gsap.timeline().fromTo(
        '.svgs',
        {
          x: -1000,
          opacity: 0.2,
          //   scale: 5,
          //   stagger: 0.08,
          //   rotate: 0,
          //   ease: 'power4.Out',
          //   color: 'transparent',
        },
        {
          x: -200,
          duration: 3,
          repeat: -1,
          opacity: 0.4,
          //   scale: 1,
          //   rotateY: 360,
          //   stagger: 0.07,
          //   ease: 'power4.Out',
        },
      );
    },
    { scope: container },
  );

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={3809}
      height={481}
      fill='none'
      {...props}
      className='footerSVG'
      ref={container}
    >
      <g
        className='svgs'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
      >
        <path
          stroke='#D475A5'
          d='M3742.15 251.558c.46.428-270.3-140.002-841.37-136.279-571.03 3.737-727.32 168.476-1411 174.863C806.139 296.53 412.959 16.037 55.52 15.102'
          opacity={0.909}
        />
        <path
          stroke='#CD70A3'
          d='M3740.58 244.926c.68.643-281.63-123.872-853.26-122.31-571.62 1.563-721.07 161.706-1408.7 169.442C790.944 299.808 406.041 25.902 52.719 22.241'
          opacity={0.864}
        />
        <path
          stroke='#C66CA2'
          d='M3739.01 238.294c.89.843-292.97-107.743-865.1-108.34-572.18-.597-714.8 154.921-1406.46 164.034C775.79 303.102 399.164 35.783 49.959 29.38'
          opacity={0.818}
        />
        <path
          stroke='#BF67A1'
          d='M3737.39 231.66c1.15 1.057-304.25-91.598-876.98-94.371-572.73-2.772-708.55 148.15-1404.21 158.628C760.595 306.394 392.246 45.66 47.2 36.531'
          opacity={0.773}
        />
        <path
          stroke='#B962A0'
          d='M3735.82 225.028c1.36 1.272-315.59-75.469-888.86-80.401-573.28-4.932-702.28 141.365-1401.92 153.205C745.398 309.672 385.327 55.541 44.398 43.67'
          opacity={0.727}
        />
        <path
          stroke='#B25D9E'
          d='M3734.25 218.396c1.57 1.486-326.87-59.34-900.75-66.432-573.83-7.107-696.03 134.594-1399.66 147.798C730.204 312.966 378.41 65.421 41.599 50.823'
          opacity={0.682}
        />
        <path
          stroke='#AB589D'
          d='M3732.64 211.765c1.82 1.7-338.21-43.196-912.64-52.478-574.42-9.267-689.75 127.809-1397.37 142.375C715.008 316.229 371.49 75.271 38.839 57.932'
          opacity={0.636}
        />
        <path
          stroke='#A4539C'
          d='M3731.07 205.131c2.04 1.915-349.55-27.065-924.48-38.507-574.98-11.443-683.51 121.038-1395.12 136.968C699.855 319.522 364.614 85.165 36.08 65.1'
          opacity={0.591}
        />
        <path
          stroke='#9D4E9B'
          d='M3729.5 198.498c2.25 2.114-360.84-10.937-936.37-24.539-575.53-13.602-677.23 114.253-1392.83 131.546C684.701 322.799 357.737 95.044 33.32 72.236'
          opacity={0.545}
        />
        <path
          stroke='#96499A'
          d='M3727.93 191.866c2.5 2.328-372.17 5.208-948.25-10.569-576.08-15.777-670.95 107.467-1390.58 126.139C669.462 326.108 350.818 104.924 30.519 79.375'
          opacity={0.5}
        />
        <path
          stroke='#8F4598'
          d='M3726.32 185.234c2.71 2.543-383.46 21.337-960.14 3.4-576.63-17.936-664.71 100.697-1388.33 120.732C654.224 329.401 343.9 114.804 27.76 86.528'
          opacity={0.455}
        />
        <path
          stroke='#884097'
          d='M3724.74 178.602c2.97 2.757-394.79 37.467-971.97 17.37-577.23-20.096-658.47 93.926-1386.09 115.31C639.07 332.68 337.023 124.669 24.958 93.667'
          opacity={0.409}
        />
        <path
          stroke='#813B96'
          d='M3723.17 171.968c3.19 2.972-406.12 53.611-983.86 31.34-577.78-22.272-652.18 87.141-1383.79 109.902C623.917 335.972 330.104 134.548 22.2 100.804'
          opacity={0.364}
        />
        <path
          stroke='#7A3695'
          d='M3721.56 165.336c3.4 3.186-417.42 69.74-995.75 45.309-578.33-24.431-645.9 80.355-1381.5 104.48C608.721 339.25 323.185 144.428 19.44 107.957'
          opacity={0.318}
        />
        <path
          stroke='#733193'
          d='M3719.99 158.703c3.65 3.386-428.75 85.87-1007.63 59.264-578.88-26.607-639.67 73.584-1379.25 99.073C593.527 342.543 316.31 154.307 16.64 115.095'
          opacity={0.273}
        />
        <path
          stroke='#6D2C92'
          d='M3718.42 152.072c3.86 3.599-440.04 102.014-1019.52 73.232-579.43-28.766-633.38 66.8-1377 93.651C578.33 345.822 309.391 164.188 13.88 122.233'
          opacity={0.227}
        />
        <path
          stroke='#662791'
          d='M3716.81 145.455c4.07 3.814-451.38 118.143-1031.36 87.202-580.03-30.941-627.15 60.029-1374.71 88.243C563.134 349.115 302.472 174.068 11.078 129.387'
          opacity={0.182}
        />
        <path
          stroke='#5F2390'
          d='M3715.24 138.821c4.33 4.029-462.67 134.273-1043.25 101.172-580.58-33.101-620.86 53.243-1372.46 82.836C547.981 352.407 295.596 183.931 8.32 136.523'
          opacity={0.136}
        />
        <path
          stroke='#581E8E'
          d='M3713.67 132.189c4.54 4.243-474 150.418-1055.13 115.142-581.14-35.276-614.63 46.473-1370.17 77.414C532.785 355.686 288.677 193.811 5.518 143.662'
          opacity={0.091}
        />
        <path
          stroke='#51198D'
          d='M3712.05 125.558c4.76 4.457-485.33 166.546-1067.01 129.11-581.69-37.436-608.34 39.688-1367.92 72.007C517.59 358.98 281.758 203.692 2.759 150.816'
          opacity={0.045}
        />
        <path
          stroke='#6588F6'
          d='M3806.11 188.787s-357.65 155.901-1115.27 21.782c-440.59-77.996-934.41-9.114-1329.55 60.182C848.459 360.68 279.212 264.793 38.712 108.172'
          opacity={0.045}
        />
        <path
          stroke='#6B87F2'
          d='M3803.23 192.418s-350.65 138.837-1101.1 12.928c-445.73-74.78-925.71-.506-1333.66 66.156C847.143 356.697 286.215 252.018 39.773 103.071'
          opacity={0.091}
        />
        <path
          stroke='#7187EF'
          d='M3800.3 196.032s-343.94 121.896-1086.92 4.059c-450.99-71.517-916.88 8.134-1337.74 72.13C846.04 352.76 293.262 239.212 40.834 97.94'
          opacity={0.136}
        />
        <path
          stroke='#7786EB'
          d='M3797.41 199.647s-337.57 105.093-1072.74-4.794c-456.47-68.224-907.93 16.834-1341.86 78.119C845.063 348.916 300.265 226.437 41.895 92.839'
          opacity={0.182}
        />
        <path
          stroke='#7D86E7'
          d='M3794.53 203.278s-331.47 88.428-1058.57-13.648c-462.07-64.869-898.89 25.581-1345.93 84.093-545.773 71.425-1082.719-60.075-1347.074-186'
          opacity={0.227}
        />
        <path
          stroke='#8386E3'
          d='M3791.64 206.892s-325.69 71.9-1044.39-22.501c-467.84-61.454-889.76 34.372-1350 90.066-553.715 66.999-1082.935-73.6-1353.19-191.85'
          opacity={0.273}
        />
        <path
          stroke='#8985E0'
          d='M3788.75 210.522s-320.13 55.526-1030.25-31.354c-473.79-57.962-880.55 43.21-1354.12 96.04C842.941 337.825 321.361 188.082 45.121 77.506'
          opacity={0.318}
        />
        <path
          stroke='#8F85DC'
          d='M3785.87 214.138s-314.83 39.289-1016.08-40.224c-479.86-54.407-871.25 52.126-1358.2 102.015C842.431 334.257 328.407 175.293 46.182 72.391'
          opacity={0.364}
        />
        <path
          stroke='#9584D8'
          d='M3782.94 217.753s-309.69 23.221-1001.9-49.077c-486.01-50.762-861.92 61.07-1362.32 107.988C841.965 330.765 335.411 162.503 47.243 67.274'
          opacity={0.409}
        />
        <path
          stroke='#9B84D4'
          d='M3780.05 221.383s-304.76 7.306-987.72-57.931c-492.34-47.024-852.54 70.078-1366.39 113.977C841.539 327.333 342.456 149.713 48.304 62.159'
          opacity={0.455}
        />
        <path
          stroke='#A184D1'
          d='M3777.17 224.998s-299.97-8.471-973.55-66.784c-498.74-43.195-843.11 79.145-1370.51 119.951C841.116 323.964 349.461 136.938 49.323 57.058'
          opacity={0.5}
        />
        <path
          stroke='#A683CD'
          d='M3774.28 228.614s-295.34-24.079-959.37-75.638c-505.24-39.243-833.69 88.259-1374.58 125.925C840.776 320.641 356.507 124.149 50.427 51.942'
          opacity={0.545}
        />
        <path
          stroke='#AC83C9'
          d='M3771.39 232.243s-290.75-39.535-945.19-84.507c-511.82-35.168-824.26 97.435-1378.7 131.899C840.436 317.377 363.51 111.358 51.487 46.825'
          opacity={0.591}
        />
        <path
          stroke='#B282C5'
          d='M3768.46 235.858s-286.21-54.836-931.01-93.359c-518.4-30.972-814.8 106.655-1382.77 137.872C840.097 314.176 370.556 98.568 52.549 41.71'
          opacity={0.636}
        />
        <path
          stroke='#B882C1'
          d='M3765.58 239.472s-281.72-69.985-916.84-102.213c-525.06-26.637-805.38 115.922-1386.85 143.861C839.758 311.004 377.603 85.777 53.61 36.593'
          opacity={0.682}
        />
        <path
          stroke='#BE81BE'
          d='M3762.69 243.102s-277.17-84.996-902.66-111.066c-531.68-22.165-795.95 125.235-1390.96 149.835C839.375 307.88 384.606 73.002 54.67 31.492'
          opacity={0.727}
        />
        <path
          stroke='#C481BA'
          d='M3759.81 246.718s-272.59-99.854-888.49-119.92c-538.3-17.538-786.53 134.594-1395.04 155.809C838.993 304.817 391.652 60.213 55.732 26.377'
          opacity={0.773}
        />
        <path
          stroke='#CA81B6'
          d='M3756.92 250.347S3489 135.757 2882.61 121.558c-544.84-12.759-777.15 144.015-1399.15 161.783C838.569 301.768 398.656 47.421 56.794 21.26'
          opacity={0.818}
        />
        <path
          stroke='#D080B2'
          d='M3754.03 253.963S3490.87 124.776 2893.9 116.32c-551.29-7.811-767.77 153.45-1403.23 167.757C838.102 298.766 405.702 34.633 57.854 16.144'
          opacity={0.864}
        />
        <path
          stroke='#D680AF'
          d='M3751.1 257.578s-258.2-143.662-845.95-146.496c-557.66-2.696-758.43 162.947-1407.35 173.73C837.635 295.795 412.705 21.842 58.958 11.044'
          opacity={0.909}
        />
        <path
          stroke='#DC7FAB'
          d='M3748.22 261.209s-253.07-158.015-831.78-155.349c-563.9 2.604-749.13 172.474-1411.42 179.719C837.083 292.87 419.752 9.069 60.02 5.929'
          opacity={0.955}
        />
      </g>
    </svg>
  );
};
export default FooterLines;
