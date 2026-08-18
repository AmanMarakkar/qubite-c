import { useState } from 'react'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

function ChevronIcon({ open, className = 'size-4' }: { open: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 12 8"
      className={`${className} transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const faqs = [
  {
    question: 'What shipping options are available for my miners?',
    answer:
      'You can ship directly to any of our facilities using your own freight forwarder, or we can arrange collection and import clearance on your behalf. We’ll confirm the receiving address and any documentation you need once your slot is booked.',
  },
  {
    question: 'Why choose Qubite as your hosting provider?',
    answer:
      'Every rate, deposit, and fee is disclosed before you commit — no renegotiating after signup. Our team manually reviews power and rack availability for your specific machines before confirming a slot, so what you see is what gets deployed.',
  },
  {
    question: 'Do you support Bitmain Antminer hosting?',
    answer:
      'Yes — Bitmain Antminer, MicroBT WhatsMiner, and most major air, hydro, and immersion-cooled ASIC models are supported. Check the "Machine Types" column on each plan, or talk to us if you’re unsure your model fits.',
  },
  {
    question: 'How long does deployment take once hardware arrives?',
    answer:
      'Most machines are unboxed, racked, and hashing within 24 hours of arrival, pending the power and rack reservation confirmed during onboarding. You’ll get a notification the moment your fleet comes online.',
  },
]

export function HostingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative bg-bg py-24">
      <Container className="relative flex flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,167,101,0.3)] bg-[rgba(232,167,101,0.08)] px-4 py-1.5 text-[10px] font-bold tracking-[0.08em] text-[#e8a765] uppercase">
            FAQ
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-[28px] font-bold text-white sm:text-[34px]">Common hosting questions</h2>
        </Reveal>

        <div className="mt-8 flex w-full max-w-[720px] flex-col gap-3 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.question} delay={140 + i * 60}>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/3">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white transition-colors hover:text-accent-bronze-tint"
                  >
                    {faq.question}
                    <ChevronIcon open={isOpen} className="size-4 shrink-0 text-text-faint" />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-text-dim">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
