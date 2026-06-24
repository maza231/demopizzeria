import Image from "next/image";
import { menu, type Pizza } from "@/data/menu";
import { pizzaImage } from "@/lib/images";

const tagStyles: Record<NonNullable<Pizza["tags"]>[number], string> = {
  vegetariana: "bg-basil/10 text-basil",
  piccante: "bg-tomato/10 text-tomato",
  novità: "bg-charcoal/10 text-charcoal",
};

function PizzaCard({ pizza, lock }: { pizza: Pizza; lock: number }) {
  return (
    <li className="flex items-center gap-4 rounded-2xl border border-sand bg-white p-4 transition-shadow hover:shadow-md">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-sand">
        <Image
          src={pizzaImage(lock, 200)}
          alt={`Pizza ${pizza.name}`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-charcoal">{pizza.name}</h3>
          {pizza.tags?.map((t) => (
            <span
              key={t}
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tagStyles[t]}`}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-charcoal/65">
          {pizza.description}
        </p>
      </div>
      <span className="shrink-0 self-start text-lg font-bold text-tomato">
        € {pizza.price.toFixed(2)}
      </span>
    </li>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="border-t border-sand bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-tomato">
            Il nostro menu
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Scegli la tua pizza
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Tutte le nostre pizze sono cotte nel forno a legna. Disponibili anche
            da asporto.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {menu.map((category, catIndex) => (
            <div key={category.id}>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-charcoal/50">
                {category.title}
              </h3>
              <ul className="grid gap-4 md:grid-cols-2">
                {category.pizzas.map((pizza, i) => (
                  <PizzaCard
                    key={pizza.name}
                    pizza={pizza}
                    lock={catIndex * 10 + i + 1}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
