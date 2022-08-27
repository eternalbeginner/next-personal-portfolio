import {
  NavigationProgress,
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RouterTransition: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => resetNavigationProgress();
    const handleStart = (url: string) => router.asPath !== url && startNavigationProgress();

    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      router.events.off("routeChangeStart", handleStart);
    };
    // eslint-disable-next-line
  }, [router.asPath]);

  return <NavigationProgress />;
};

export default RouterTransition;
