import FeaturedProjects from './featured-projects';

export default function Features() {
  return (
    <section
      id="features"
      aria-label="index-features"
      className="mx-auto inline-flex w-full items-center space-x-[74px] px-[100px] py-[100px]"
    >
      <div className="w-full max-w-[387px] space-y-6">
        <h3 className="text-[2.625rem]/[4.375rem] font-bold">Features</h3>
        <p className="text-[1rem] font-light">
          stay informed about market trends, and connect with like-minded individuals who
          share your vision for the future of real estate.
        </p>
      </div>
      {/* <div className="h-full w-full  overflow-x-auto"> */}
      <FeaturedProjects />
      {/* </div> */}
    </section>
  );
}
