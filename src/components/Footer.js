import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="md:h-[72vh] bg-[#DAA520] h-[100%] mt-36"
      id="about"
    >
      <h1
        className="
       flex justify-center align-center text-white text-3xl sm:text-3xl font-light pt-12"
        data-aos="fade-up"
      >
        About Us?
      </h1>
      <p
        className="flex justify-center align-center text-white text-xl sm:text-sm font-light sm:mt-6 sm:ml-32 sm:mr-32 mx-6"
        data-aos="fade-up"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
        hic perferendis ipsa unde repellendus architecto deserunt
        facere ducimus velit officiis maiores perspiciatis sit
        suscipit, culpa non inventore dolor accusantium sunt expedita
        et quisquam voluptate ipsum. Ab nemo est, corrupti sequi minus
        illum obcaecati iure nostrum quas laudantium eaque dolorem,
        ratione vero itaque! Repudiandae, officiis molestias similique
        nihil saepe ea nisi nesciunt consectetur explicabo reiciendis
        dolorum assumenda at alias quas doloremque rem, quisquam eius
        iusto voluptatibus. In consequuntur natus laborum sint!
      </p>
      <p className="text-center text-white text-[35px] font-bold mt-16">
        CARSONS
      </p>
      <p className="text-center text-white text-[10px] font-sm mt-2">
        © 2023 Carson INC. All rights reserved
      </p>
    </div>
  );
};
