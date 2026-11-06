import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function FormSuccess() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-ink sm:text-xl">Thanks!</h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
        WhatsApp should open with your message ready to send. If it
        didn&apos;t, call or WhatsApp James on {site.phoneDisplay} or find
        him on Facebook or Instagram.
      </p>
      <Button href={`tel:${site.phoneTel}`} className="mt-6 w-full sm:w-auto">
        Call {site.phoneDisplay}
      </Button>
    </div>
  );
}
