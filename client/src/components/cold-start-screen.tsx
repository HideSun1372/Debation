import { useEffect, useState } from "react";

export function ColdStartScreen() {
  const [elapsed, setElapsed] = useState(0);
  const [showConnectivityError, setShowConnectivityError] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => setElapsed(Date.now() - start), 500);
    const errorTimer = setTimeout(() => setShowConnectivityError(true), 180_000);
    return () => { clearInterval(tick); clearTimeout(errorTimer); };
  }, []);

  const elapsedSec = Math.floor(elapsed / 1000);
  // Progress fills over ~30s, never reaches 100% until the server actually responds
  const progress = Math.min((elapsed / 30_000) * 90, 90);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center gap-6 px-4">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        <p className="text-lg font-semibold">Waking up the server...</p>
        <p className="text-sm text-muted-foreground">
          The server is on a free plan and sleeps after inactivity. This usually takes about 30 seconds.
        </p>

        <div className="w-full">
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{elapsedSec}s</p>
        </div>

        {showConnectivityError && (
          <p className="text-xs text-muted-foreground opacity-70">
            Taking longer than expected. Are you connected to the internet?
          </p>
        )}
      </div>
    </div>
  );
}
