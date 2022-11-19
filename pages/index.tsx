import styles from "./styles/Home.module.css";
import { useAddress, useContract, useDisconnect } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";

const Home: NextPage = () => {
  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.
  const { contract } = useContract(
    "0xC166FA92A0515234DeA1BF52D06776168600dfDE",
    "marketplace"
  );

  const [email, setEmail] = useState<string>(""); // State to hold the email address the user entered.

  async function onSubmit() {
    connectWithMagic({ email });

    if (contract) {
      const tx = await contract.buyoutListing(25, 1);
      console.log(tx);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>thirdweb + Magic.Link</h1>
        <p className={styles.explain}>
          Connect users to your dApp using their email or social media accounts
          using{" "}
          <b>
            {" "}
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              thirdweb
            </a>
          </b>{" "}
          and{" "}
          <b>
            {" "}
            <a
              href="https://magic.link/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              Magic.Link
            </a>
          </b>
          .
        </p>
        <hr className={styles.divider} />

        <>
          <h2 style={{ fontSize: "1.3rem" }}>Login With Email</h2>
          <div
            style={{
              width: 500,
              maxWidth: "90vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className={styles.textInput}
              style={{ width: "90%", marginBottom: 0 }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <a className={styles.mainButton} onClick={onSubmit}>
              Buy
            </a>
          </div>
        </>
      </div>
    </>
  );
};

export default Home;
