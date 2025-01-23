import BoxReveal from "@/components/magicui/box-reveal";

export async function PromotionSection() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          DoubtSolver<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          a QnA platform for{" "}
          <span className="text-[#5046e6]">high school students</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; In one place, you can track your
            <span className="font-semibold text-[#5046e6]"> questions</span>,
            <span className="font-semibold text-[#5046e6]"> responses</span>,
            and
            <span className="font-semibold text-[#5046e6]">progress</span>
            . <br />
            -&gt; Connect with subject matter experts to deepen your
            understanding. <br />
          </p>
        </div>
      </BoxReveal>
    </div>
  );
}
