import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex h-14 items-center gap-3 px-4">
        <Button
          href={`tel:${site.phoneTel}`}
          variant="outline"
          className="w-full min-w-0"
        >
          Call
        </Button>
        <Button href="/contact" className="w-full min-w-0">
          Free Quote
        </Button>
      </div>
    </div>
  );
}
