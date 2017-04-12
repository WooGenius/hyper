(function() {var implementors = {};
implementors["hyper"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.HttpConnector.html' title='hyper::client::HttpConnector'>HttpConnector</a>","impl&lt;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.Request.html' title='hyper::client::Request'>Request</a>&lt;B&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.Response.html' title='hyper::client::Response'>Response</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.FutureResponse.html' title='hyper::client::FutureResponse'>FutureResponse</a>","impl&lt;C, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.Client.html' title='hyper::client::Client'>Client</a>&lt;C, B&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.UseDefaultConnector.html' title='hyper::client::UseDefaultConnector'>UseDefaultConnector</a>","impl&lt;C, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/client/struct.Config.html' title='hyper::client::Config'>Config</a>&lt;C, B&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='hyper/error/enum.Error.html' title='hyper::error::Error'>Error</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='hyper/enum.Method.html' title='hyper::Method'>Method</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for Error","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/header/struct.LanguageTag.html' title='hyper::header::LanguageTag'>LanguageTag</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/header/struct.Raw.html' title='hyper::header::Raw'>Raw</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/header/parsing/struct.ExtendedValue.html' title='hyper::header::parsing::ExtendedValue'>ExtendedValue</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/header/struct.Headers.html' title='hyper::header::Headers'>Headers</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/header/struct.HeaderView.html' title='hyper::header::HeaderView'>HeaderView</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/struct.Body.html' title='hyper::Body'>Body</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/struct.Chunk.html' title='hyper::Chunk'>Chunk</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/server/struct.Request.html' title='hyper::server::Request'>Request</a>","impl&lt;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/server/struct.Response.html' title='hyper::server::Response'>Response</a>&lt;B&gt;","impl&lt;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/server/struct.Http.html' title='hyper::server::Http'>Http</a>&lt;B&gt;","impl&lt;S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a>, B: <a class='trait' href='https://docs.rs/futures/0.1/futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Error=<a class='enum' href='hyper/error/enum.Error.html' title='hyper::error::Error'>Error</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/server/struct.Server.html' title='hyper::server::Server'>Server</a>&lt;S, B&gt; <span class='where'>where B::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='hyper/status/enum.StatusCode.html' title='hyper::status::StatusCode'>StatusCode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='hyper/status/enum.StatusClass.html' title='hyper::status::StatusClass'>StatusClass</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/struct.Uri.html' title='hyper::Uri'>Uri</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='struct' href='hyper/error/struct.UriError.html' title='hyper::error::UriError'>UriError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html' title='core::fmt::Debug'>Debug</a> for <a class='enum' href='hyper/enum.HttpVersion.html' title='hyper::HttpVersion'>HttpVersion</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
