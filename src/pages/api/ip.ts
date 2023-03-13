export default (
  req: {
    headers: { [x: string]: string };
    connection: { remoteAddress: any; socket: { remoteAddress: any } };
    socket: { remoteAddress: any };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { ip: any }): void; new (): any };
    };
  }
) => {
  const ipAddress =
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  const ipv4Address = ipAddress ? ipAddress.replace(/^.*:/, "") : null;

  res.status(200).json({ ip: ipv4Address });
};
