#![deny(clippy::all)]

use napi::bindgen_prelude::*;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn get_buffer() -> Buffer {
  let v = vec![0, 0, 1];
  Buffer::from(v)
}
