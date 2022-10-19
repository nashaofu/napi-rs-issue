#![deny(clippy::all)]

use napi::bindgen_prelude::Buffer;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn get_buffer() -> Buffer {
  Buffer::from(vec![0,0,0])
}
