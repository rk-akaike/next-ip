export default function Home({ ip }: any) {
  return (
    <div>
      <h1>ip address: {ip}</h1>
    </div>
  );
}
export async function getServerSideProps({ req }: any) {
  const ipAddress =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  const ipv4Address = ipAddress ? ipAddress.replace(/^.*:/, "") : null;
  console.log(
    "🚀 ~ file: index.tsx:16 ~ getServerSideProps ~ ipv4Address:",
    ipv4Address
  );

  return {
    props: {
      ip: ipv4Address,
    },
  };
}
