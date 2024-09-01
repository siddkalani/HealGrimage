import { cities } from "../assets/cities";
import { treatments } from "../assets/treatments";

const City = () => {
  return (
    <div className="text-black font-Poppins">
      <h1 className="text-4xl m-5">About City X</h1>
      <div className="bg-[#052560] w-[240px] rounded-xl m-5">
        <img src={cities[1].logo} alt="" className="h-[200px] ml-5" />
      </div>
      <p className="p-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima iste,
        fugiat voluptate soluta reiciendis sed, ipsum sequi nobis magnam ea
        quisquam unde at error asperiores voluptates provident molestias placeat
        tenetur? Sunt neque similique, aliquid distinctio molestias veritatis
        eligendi qui. Pariatur, delectus omnis! Eum odit alias placeat enim
        atque, sit voluptas aliquam corrupti pariatur quam expedita reiciendis
        accusantium facere dolorum rerum quis odio saepe recusandae? Velit, iure
        voluptatem officia iste esse rerum odio quae fugit qui dolorum debitis
        voluptatibus adipisci impedit mollitia magni placeat eveniet cumque
        quasi aliquid voluptate in. Sed doloribus iusto harum natus. Maxime
        dolores repellendus minima dolor consequatur?
      </p>

      <h2 className="text-2xl m-5">Top Treatments Offered By This City</h2>
      <div className="mb-5">
        <ul className="bg-[#052560] flex list-none w-[770px] ml-5 p-2 rounded-lg">
          <li>
            <div className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center">
              {<img src={treatments[0].logo} alt="" className="w-[40px]" />}
              <p>{treatments[0].name}</p>
            </div>
          </li>
          <li>
            <div className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center">
              {
                <img
                  src={treatments[1].logo}
                  alt=""
                  color="white"
                  className="w-[40px]"
                />
              }
              <p>{treatments[1].name}</p>
            </div>
          </li>
          <li>
            <div className="w-[250px] hover:bg-[#062d75] cursor-pointer rounded-md p-2 text-white flex flex-col justify-center items-center">
              {
                <img
                  src={treatments[2].logo}
                  alt=""
                  color="white"
                  className="w-[40px]"
                />
              }
              <p>{treatments[2].name}</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl ml-5 mt-10x">About The City</h2>
      <p className="p-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ab quas officiis, doloremque delectus aspernatur. Aspernatur, numquam beatae. Atque placeat repellat magni id, ex at sunt perspiciatis fugiat sequi veritatis. Dolorem qui, impedit magnam tenetur reiciendis, enim quo in aut maxime consectetur minima. Quia deserunt nulla minima, quidem omnis quas.</p>
    </div>
  );
};

export default City;
