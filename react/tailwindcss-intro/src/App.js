function  App () {
  return (
  <div  className = "bg-lime-300 h-screen p-[50px]">
   
   <h1 className="text-8xl font-bold bg-[#bebe]">Tailwind CSS Kurulumu</h1>
      
        <h1 className="text-3xl font-bold underline">Hello World</h1>

  <div className = "flex flex-col sm:flex-row gap-3 mt-4 ">
  <div  className = "flex flex-col justify-between items-senter bg-slate-500 rounded-xl w-3/12 h-[250px] ">
  <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt=""  className = "rounded-xl h-[250px] animate-pulse " />
  <p className = "line-clamp-2 hover:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto qui adipisci eveniet officia nulla voluptatum praesentium, quo id neque aliquid mollitia ut suscipit a. Alias odit quae impedit sed!</p>

</div>

<div  className = "card">

  <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt=""  className = "rounded-xl h-[250px] animate-pulse " />
  <p className = "line-clamp-2 hover:line-clamp-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, tempora. Nesciunt error laudantium, voluptatibus illo quibusdam fuga mollitia. Excepturi, molestiae. Repellendus aperiam neque est error eos totam ut dolor voluptate.</p>
  </div>

    </div>







        </div>


   





  );
 }

export default App;