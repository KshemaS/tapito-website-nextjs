"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

const CLIENTS = [
  { name: "Client 1", url: "/assets/images/clients/6IOlnjRE6x-XJTQWG7I-44nJzG3-qB2VRYmBUiCkZLRzHDSrE11yYfYjixY8jZQJLl0ZOU0L1MugxAqL0KFgczsVZAAQ7cagWwuuo410Y0B9Y18rpNtg9zZAZyBr0un5L4z74JlMezFVcMKb9NvtF2JbNjRlYnvjIMv7lAb1bWJ09QG6ooLBb_s6OQudsHiP.png" },
  { name: "Client 2", url: "/assets/images/clients/LtZmBu39GHkznxY3oSreDkuBdwQu3K1apEcA1WCDPHyQsfWkYvd2zfIz2nLQIw0CYmL1yfkslJm1I7ztdTAKXMt5BDJMmxV6IREB8sOb_8wM_Emh5_lS060NGPSfotvEr32zllNGgIiKk_q_CgrXz3qnLj4D8gp_FX8SeS9oSJPxr8_CiagvpfVL8M0pmHz7.png" },
  { name: "Client 3", url: "/assets/images/clients/SAg4971E4x6dQXS2o-63ubmvpue2QIEcAyp6NuXB2tu-VOjlMIOCACJajU8ptC6Fd5SrGKSsg2ZHVMNT0Qoh2P7GusOkwL0zx2vPQs6TYcajC8-zLKFxZpl-xCJ-Wv6iYQ1eid5c5XduaSOHTYlSghwPEUBgJsgM6M_hPaReqLAK4xe4hnWCO6UbpyYjCOsj.png" },
  { name: "Client 4", url: "/assets/images/clients/VvVMSYkpw8T65poEaJelLKGqJHF3kVkuhlkBvgjXiZ9co6dvhuNYj7cYlZaFa7wh2kQc8vwti8-Bb2-5C2yNhTWj5jNFC3aokya13HOMdptrTtPpngeFvLNu4XRd6F76URgrvNeiGwqyWHv7IepLu-w2UgkSSlRXH2Gz-detTBuE2Fuyek1y4K0Kr_JnneMZ.png" },
  { name: "Client 5", url: "/assets/images/clients/aDGdYz-H5_xYOtBO20Lxtn1XYl-_5hgB-inWtj_1DqO8y78h9KFYYtD6-bjVePUiHLMZE5WBxnH0S9VApUS98ywzyf9JN0yOFdbnt6QzKeyl9xQYVYjYdmA71zeilGXjWTjlimZc_AkUC2JaKfAvJFKERlYj-Tpiz7rDrMu2hbFa0Z9bFgom67VynhHCOFh8.png" },
  { name: "Client 6", url: "/assets/images/clients/dt1HNw6p4N90SNfsVphHYnucvL4iwrqGLeqlaTrMGpEbIuKSTbKPNXNH2v8Oj4Lw4n2L3Udk32X3pGTWhI1Pt9aEMucE2B92PmaeYI1SURGmC0sZ7878lyifKJY-uZ1mW_WojfB6BTJHzxZjSDtE11yYfYjixY8jZQJLl0ZOU0L1MugxAqL0KFgczsVZAAQ7cagWwuuo410Y0B9Y18rpNtg9zZAZyBr0un5L4z74JlMezFVcMKb9NvtF2JbNjRlYnvjIMv7lAb1bWJ09QG6ooLBb_s6OQudsHiP.png" },
  { name: "Client 7", url: "/assets/images/clients/hEmVRDn8frWN5TmN0V7HsSxnu0IX-x6VcgnPd1aBjXJCTkluqQpe-fXx48Y4cey9MlUo4-qUsYZ3imEHxJksQOkQUNOvYYJTXGgwXnU5wpkjjb4IuOtq7ZKYCKc_E5ek2tvXjIRmDO3IovCqUfuzVpsCP7ieDPQutiys5G72Z2arn8ZfSQ2Gs7wwbKGDk92N.png" },
  { name: "Client 8", url: "/assets/images/clients/iASuPmTYhGlez2ohM1tEjrToA5tBerqO74vNGfB31YbXeSsCS9KM0ZgV57FMtIruIfoztH2stRIXNQ9aiN8F-gtYZmC46tHudWykd_aDnaYdw3vFpuJ6pC1OcSqOfURwOeIdg80yfqpafdOD5Fubi9HTGugQMZKM98XQB4_WNFdg2NHbAyT-7QeTUxuV7l1y.png" },
  { name: "Client 9", url: "/assets/images/clients/iw6bgrzSMR7f4O5mbaMYpbpiovxqou7blL_2tglqMHrgq7XFMvJ74Ias5Eb0SIsMmt92aYNpOfldVmL3KsI5hqlBtxqZi0o5vg_eBzX9SMo94AmmtDOVwGAG5Hb94sfYb9MrMEFjrmy3Zo6Kq7dVQ8C3oRoaW7vrybbVfzmw16tV8CH5ggYqoZOZrxixrmzU.png" },
  { name: "Client 10", url: "/assets/images/clients/oi2XJD5GM9cNMip4Wd58Tnni2-xEFE6ojFXP8qlVoDa4N11pmGLwa4PJ0mH77IVKDgVv13vBa6Mr6N-b_F7WqdWqw7imjlKWlYIciGRLoXaFhHSlu-oHcznyUYBlpkfnsbNmfIoTSKLNuoReD5vxAf0Nz3Qln-ivpFEHAZKDrok26axjUH1z4ue-NNJrT_eD.png" },
  { name: "Client 11", url: "/assets/images/clients/sD02fwcyn1l9mUmn0h59fhMk02Am41mdpBCJ5CFNn3BC4mtXHSy2bXQw8v20OLmjXIQSP1hrIZCCHpCF3BaKdQILQ3JVZ1DHNTWzz11m1F8qy6gDVLqWt0mH3zwFiQ_tbXZEVAvk7nKtWH_ckNwRiPXjmBflC0HI1zlicm_VoQ38CXfgUDSrPw7JeM6c1xc9.png" },
  { name: "Client 12", url: "/assets/images/clients/wKQTdlXQ0ma2kLiwjLcy9ol8ypwmC3uhl3HZ5UDlnIeVteiGcQRwJGT_gmukucorYIWPbIw6bOaLIYzb_HR1K_9ptreB6XePI5CcTKc2WtsEwEcHV2WQ8fV0JqFlUKx7DzlVYEuZgRV9s380QNCkDbS96QxjpEi--_FJpzMs70aigZhWUjDxmctYvsg79mNT.png" },
];

export default function AboutClients() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center">
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-400 text-[13px] font-medium tracking-wide mb-16 text-center"
            >
                Trusted by professionals from flourishing idea to breakthrough
            </motion.p>

            <div className="relative w-full max-w-6xl mx-auto px-10">
                {/* Horizontal Marquee */}
                <div className="flex overflow-hidden group">
                    <motion.div 
                        animate={{ x: [0, -1200] }}
                        transition={{ 
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex items-center gap-24 whitespace-nowrap"
                    >
                        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
                            <div 
                                key={idx}
                                className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            >
                                <img 
                                    src={client.url} 
                                    alt={client.name}
                                    className="h-9 md:h-12 w-auto object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
