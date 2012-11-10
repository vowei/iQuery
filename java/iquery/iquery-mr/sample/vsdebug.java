import java.io.*;
import java.net.InetSocketAddress;
import java.net.Socket;

public class vsdebug {
    public static void main(String[] args) throws Exception {
	if ( args.length != 3 ) {
	    System.out.println("Usage: java vsdebug <host> <port> <command>");
	    return;
	}

	String host = args[0];
	int port = Integer.parseInt(args[1]);
	String command = args[2];

	Socket socket = new Socket();
	socket.connect(new InetSocketAddress(host, port));

	BufferedWriter out = new BufferedWriter
	    (new OutputStreamWriter(socket.getOutputStream()));
	BufferedReader in = new BufferedReader
	    (new InputStreamReader(socket.getInputStream(), "utf-8"));
	out.write(command);
	out.newLine();
	out.flush();
	String line = null;

	while ((line = in.readLine()) != null) {	    
	    if ( line.compareTo("DONE.") != 0 ) {
		System.out.println(line);
	    } else {
		break;
	    }
	}

	socket.close();
    }
}