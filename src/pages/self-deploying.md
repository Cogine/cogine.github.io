# Self-deploying

You can deploy Cogine to your self project easily, please checkout the demo code in the Reality World project, the following is the main source code.

Basically, you are doing two things:

- call Cogine API to create an App, which will load and run agents, and run it, and
- create an thread to send and receive message from Cogine runtime.

```rust
fn main() {
    let root = "D:\\P\\RealityWorld\\app_data";

    // there should be a process or operation let user to select one or more Dna to start
    // here we start a special Dna
    let dna_root = "D:\\P\\RealityWorld\\app_data\\dna\\dna1.json".to_owned();
    let dna = load_dna(&dna_root.to_string()).unwrap();

    let (user_sender, app_receiver) = mpsc::channel::<Message>();
    let (app_sender, user_receiver) = mpsc::channel::<Message>();

    let mut app = Box::<RealityApp>::default();
    app.init(
        root.to_string(),
        &dna.agents,
        move || {
            let mut message: Option<Message> = None;
            match user_receiver.try_recv() {
                Ok(msg) => {
                    println!("{}: {}", msg.sender, msg.content.to_string());
                    message = Some(msg);
                }
                Err(e) => {}
            }

            message
        },
        move |msg| {
            user_sender.send(msg).unwrap();
        },
    );

    // game thread
    thread::spawn(move || loop {
        App::new(root).start_dna(&dna.clone()).run(
            || {
                let mut message: Option<Message> = None;
                match app_receiver.try_recv() {
                    Ok(msg) => {
                        println!("{}: {}", msg.sender, msg.content.to_string());
                        message = Some(msg);
                    }
                    Err(e) => {}
                }

                message
            },
            |msg| {
                app_sender.send(msg).unwrap();
            },
        );
    });

    let options = eframe::NativeOptions {
        initial_window_size: Some(egui::vec2(900.0, 600.0)),
        ..Default::default()
    };
    eframe::run_native("Reality World", options, Box::new(|_cc| app))
        .expect("Failed to run native example");
}
```

# Business suggestions by using Cogine