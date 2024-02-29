import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative flex h-full w-full flex-col items-center justify-center pt-36">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center">Run your agency, in one place</p>
        <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
          <h1 className="text-center text-9xl font-bold md:text-[300px] ">
            Plura
          </h1>
        </div>

        <div className="mt:-mt-[70px] relative flex items-center justify-center">
          <Image
            src="/assets/preview.png"
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-t-2xl border-2 border-muted"
          />
          <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 md:mt-20">
        <h2 className="text-center text-4xl">Choose what fits your right</h2>
        <p className="text-muted-forground text-center">
          Out straightforward pricing plans are tailored to meet your needs. If{" "}
          {"yout're"} not <br /> ready to commit, you can get started for free.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-items-center gap-4">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("flex w-[300px] flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimted Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
