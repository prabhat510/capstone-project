"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [179],
  {
    338: () => {
      function ie(e) {
        return "function" == typeof e;
      }
      function po(e) {
        const n = e((r) => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n),
          n
        );
      }
      const xi = po(
        (e) =>
          function (n) {
            e(this),
              (this.message = n
                ? `${n.length} errors occurred during unsubscription:\n${n
                    .map((r, o) => `${o + 1}) ${r.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = n);
          }
      );
      function go(e, t) {
        if (e) {
          const n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      class ht {
        constructor(t) {
          (this.initialTeardown = t),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let t;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: n } = this;
            if (n)
              if (((this._parentage = null), Array.isArray(n)))
                for (const i of n) i.remove(this);
              else n.remove(this);
            const { initialTeardown: r } = this;
            if (ie(r))
              try {
                r();
              } catch (i) {
                t = i instanceof xi ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Yd(i);
                } catch (s) {
                  (t = null != t ? t : []),
                    s instanceof xi ? (t = [...t, ...s.errors]) : t.push(s);
                }
            }
            if (t) throw new xi(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) Yd(t);
            else {
              if (t instanceof ht) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (n = this._finalizers) && void 0 !== n ? n : []).push(
                t
              );
            }
        }
        _hasParent(t) {
          const { _parentage: n } = this;
          return n === t || (Array.isArray(n) && n.includes(t));
        }
        _addParent(t) {
          const { _parentage: n } = this;
          this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
        }
        _removeParent(t) {
          const { _parentage: n } = this;
          n === t ? (this._parentage = null) : Array.isArray(n) && go(n, t);
        }
        remove(t) {
          const { _finalizers: n } = this;
          n && go(n, t), t instanceof ht && t._removeParent(this);
        }
      }
      ht.EMPTY = (() => {
        const e = new ht();
        return (e.closed = !0), e;
      })();
      const Jd = ht.EMPTY;
      function Kd(e) {
        return (
          e instanceof ht ||
          (e && "closed" in e && ie(e.remove) && ie(e.add) && ie(e.unsubscribe))
        );
      }
      function Yd(e) {
        ie(e) ? e() : e.unsubscribe();
      }
      const Hn = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Fi = {
          setTimeout(e, t, ...n) {
            const { delegate: r } = Fi;
            return (null == r ? void 0 : r.setTimeout)
              ? r.setTimeout(e, t, ...n)
              : setTimeout(e, t, ...n);
          },
          clearTimeout(e) {
            const { delegate: t } = Fi;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function Xd(e) {
        Fi.setTimeout(() => {
          const { onUnhandledError: t } = Hn;
          if (!t) throw e;
          t(e);
        });
      }
      function ef() {}
      const cC = Na("C", void 0, void 0);
      function Na(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      let Un = null;
      function Ni(e) {
        if (Hn.useDeprecatedSynchronousErrorHandling) {
          const t = !Un;
          if ((t && (Un = { errorThrown: !1, error: null }), e(), t)) {
            const { errorThrown: n, error: r } = Un;
            if (((Un = null), n)) throw r;
          }
        } else e();
      }
      class Ra extends ht {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), Kd(t) && t.add(this))
              : (this.destination = yC);
        }
        static create(t, n, r) {
          return new Ri(t, n, r);
        }
        next(t) {
          this.isStopped
            ? ka(
                (function fC(e) {
                  return Na("N", e, void 0);
                })(t),
                this
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? ka(
                (function dC(e) {
                  return Na("E", void 0, e);
                })(t),
                this
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? ka(cC, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          try {
            this.destination.error(t);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const pC = Function.prototype.bind;
      function Oa(e, t) {
        return pC.call(e, t);
      }
      class gC {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const { partialObserver: n } = this;
          if (n.next)
            try {
              n.next(t);
            } catch (r) {
              Oi(r);
            }
        }
        error(t) {
          const { partialObserver: n } = this;
          if (n.error)
            try {
              n.error(t);
            } catch (r) {
              Oi(r);
            }
          else Oi(t);
        }
        complete() {
          const { partialObserver: t } = this;
          if (t.complete)
            try {
              t.complete();
            } catch (n) {
              Oi(n);
            }
        }
      }
      class Ri extends Ra {
        constructor(t, n, r) {
          let o;
          if ((super(), ie(t) || !t))
            o = {
              next: null != t ? t : void 0,
              error: null != n ? n : void 0,
              complete: null != r ? r : void 0,
            };
          else {
            let i;
            this && Hn.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: t.next && Oa(t.next, i),
                  error: t.error && Oa(t.error, i),
                  complete: t.complete && Oa(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new gC(o);
        }
      }
      function Oi(e) {
        Hn.useDeprecatedSynchronousErrorHandling
          ? (function hC(e) {
              Hn.useDeprecatedSynchronousErrorHandling &&
                Un &&
                ((Un.errorThrown = !0), (Un.error = e));
            })(e)
          : Xd(e);
      }
      function ka(e, t) {
        const { onStoppedNotification: n } = Hn;
        n && Fi.setTimeout(() => n(e, t));
      }
      const yC = {
          closed: !0,
          next: ef,
          error: function mC(e) {
            throw e;
          },
          complete: ef,
        },
        Pa =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function $n(e) {
        return e;
      }
      let ye = (() => {
        class e {
          constructor(n) {
            n && (this._subscribe = n);
          }
          lift(n) {
            const r = new e();
            return (r.source = this), (r.operator = n), r;
          }
          subscribe(n, r, o) {
            const i = (function _C(e) {
              return (
                (e && e instanceof Ra) ||
                ((function vC(e) {
                  return e && ie(e.next) && ie(e.error) && ie(e.complete);
                })(e) &&
                  Kd(e))
              );
            })(n)
              ? n
              : new Ri(n, r, o);
            return (
              Ni(() => {
                const { operator: s, source: a } = this;
                i.add(
                  s
                    ? s.call(i, a)
                    : a
                    ? this._subscribe(i)
                    : this._trySubscribe(i)
                );
              }),
              i
            );
          }
          _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (r) {
              n.error(r);
            }
          }
          forEach(n, r) {
            return new (r = nf(r))((o, i) => {
              const s = new Ri({
                next: (a) => {
                  try {
                    n(a);
                  } catch (l) {
                    i(l), s.unsubscribe();
                  }
                },
                error: i,
                complete: o,
              });
              this.subscribe(s);
            });
          }
          _subscribe(n) {
            var r;
            return null === (r = this.source) || void 0 === r
              ? void 0
              : r.subscribe(n);
          }
          [Pa]() {
            return this;
          }
          pipe(...n) {
            return (function tf(e) {
              return 0 === e.length
                ? $n
                : 1 === e.length
                ? e[0]
                : function (n) {
                    return e.reduce((r, o) => o(r), n);
                  };
            })(n)(this);
          }
          toPromise(n) {
            return new (n = nf(n))((r, o) => {
              let i;
              this.subscribe(
                (s) => (i = s),
                (s) => o(s),
                () => r(i)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function nf(e) {
        var t;
        return null !== (t = null != e ? e : Hn.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      const DC = po(
        (e) =>
          function () {
            e(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      let nn = (() => {
        class e extends ye {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(n) {
            const r = new rf(this, this);
            return (r.operator = n), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new DC();
          }
          next(n) {
            Ni(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers) r.next(n);
              }
            });
          }
          error(n) {
            Ni(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = n);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(n);
              }
            });
          }
          complete() {
            Ni(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: n } = this;
                for (; n.length; ) n.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var n;
            return (
              (null === (n = this.observers) || void 0 === n
                ? void 0
                : n.length) > 0
            );
          }
          _trySubscribe(n) {
            return this._throwIfClosed(), super._trySubscribe(n);
          }
          _subscribe(n) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(n),
              this._innerSubscribe(n)
            );
          }
          _innerSubscribe(n) {
            const { hasError: r, isStopped: o, observers: i } = this;
            return r || o
              ? Jd
              : ((this.currentObservers = null),
                i.push(n),
                new ht(() => {
                  (this.currentObservers = null), go(i, n);
                }));
          }
          _checkFinalizedStatuses(n) {
            const { hasError: r, thrownError: o, isStopped: i } = this;
            r ? n.error(o) : i && n.complete();
          }
          asObservable() {
            const n = new ye();
            return (n.source = this), n;
          }
        }
        return (e.create = (t, n) => new rf(t, n)), e;
      })();
      class rf extends nn {
        constructor(t, n) {
          super(), (this.destination = t), (this.source = n);
        }
        next(t) {
          var n, r;
          null ===
            (r =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.next) ||
            void 0 === r ||
            r.call(n, t);
        }
        error(t) {
          var n, r;
          null ===
            (r =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.error) ||
            void 0 === r ||
            r.call(n, t);
        }
        complete() {
          var t, n;
          null ===
            (n =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.complete) ||
            void 0 === n ||
            n.call(t);
        }
        _subscribe(t) {
          var n, r;
          return null !==
            (r =
              null === (n = this.source) || void 0 === n
                ? void 0
                : n.subscribe(t)) && void 0 !== r
            ? r
            : Jd;
        }
      }
      function of(e) {
        return ie(null == e ? void 0 : e.lift);
      }
      function Re(e) {
        return (t) => {
          if (of(t))
            return t.lift(function (n) {
              try {
                return e(n, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      function Te(e, t, n, r, o) {
        return new CC(e, t, n, r, o);
      }
      class CC extends Ra {
        constructor(t, n, r, o, i, s) {
          super(t),
            (this.onFinalize = i),
            (this.shouldUnsubscribe = s),
            (this._next = n
              ? function (a) {
                  try {
                    n(a);
                  } catch (l) {
                    t.error(l);
                  }
                }
              : super._next),
            (this._error = o
              ? function (a) {
                  try {
                    o(a);
                  } catch (l) {
                    t.error(l);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = r
              ? function () {
                  try {
                    r();
                  } catch (a) {
                    t.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var t;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: n } = this;
            super.unsubscribe(),
              !n &&
                (null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this));
          }
        }
      }
      function Y(e, t) {
        return Re((n, r) => {
          let o = 0;
          n.subscribe(
            Te(r, (i) => {
              r.next(e.call(t, i, o++));
            })
          );
        });
      }
      function Gn(e) {
        return this instanceof Gn ? ((this.v = e), this) : new Gn(e);
      }
      function EC(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var o,
          r = n.apply(e, t || []),
          i = [];
        return (
          (o = {}),
          s("next"),
          s("throw"),
          s("return"),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function s(f) {
          r[f] &&
            (o[f] = function (h) {
              return new Promise(function (p, m) {
                i.push([f, h, p, m]) > 1 || a(f, h);
              });
            });
        }
        function a(f, h) {
          try {
            !(function l(f) {
              f.value instanceof Gn
                ? Promise.resolve(f.value.v).then(u, c)
                : d(i[0][2], f);
            })(r[f](h));
          } catch (p) {
            d(i[0][3], p);
          }
        }
        function u(f) {
          a("next", f);
        }
        function c(f) {
          a("throw", f);
        }
        function d(f, h) {
          f(h), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
      }
      function MC(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = (function lf(e) {
              var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && "number" == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(e)),
            (n = {}),
            r("next"),
            r("throw"),
            r("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function r(i) {
          n[i] =
            e[i] &&
            function (s) {
              return new Promise(function (a, l) {
                !(function o(i, s, a, l) {
                  Promise.resolve(l).then(function (u) {
                    i({ value: u, done: a });
                  }, s);
                })(a, l, (s = e[i](s)).done, s.value);
              });
            };
        }
      }
      const uf = (e) =>
        e && "number" == typeof e.length && "function" != typeof e;
      function cf(e) {
        return ie(null == e ? void 0 : e.then);
      }
      function df(e) {
        return ie(e[Pa]);
      }
      function ff(e) {
        return (
          Symbol.asyncIterator &&
          ie(null == e ? void 0 : e[Symbol.asyncIterator])
        );
      }
      function hf(e) {
        return new TypeError(
          `You provided ${
            null !== e && "object" == typeof e ? "an invalid object" : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      const pf = (function SC() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
      function gf(e) {
        return ie(null == e ? void 0 : e[pf]);
      }
      function mf(e) {
        return EC(this, arguments, function* () {
          const n = e.getReader();
          try {
            for (;;) {
              const { value: r, done: o } = yield Gn(n.read());
              if (o) return yield Gn(void 0);
              yield yield Gn(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function yf(e) {
        return ie(null == e ? void 0 : e.getReader);
      }
      function Bt(e) {
        if (e instanceof ye) return e;
        if (null != e) {
          if (df(e))
            return (function IC(e) {
              return new ye((t) => {
                const n = e[Pa]();
                if (ie(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(e);
          if (uf(e))
            return (function TC(e) {
              return new ye((t) => {
                for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
                t.complete();
              });
            })(e);
          if (cf(e))
            return (function xC(e) {
              return new ye((t) => {
                e.then(
                  (n) => {
                    t.closed || (t.next(n), t.complete());
                  },
                  (n) => t.error(n)
                ).then(null, Xd);
              });
            })(e);
          if (ff(e)) return vf(e);
          if (gf(e))
            return (function FC(e) {
              return new ye((t) => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (yf(e))
            return (function NC(e) {
              return vf(mf(e));
            })(e);
        }
        throw hf(e);
      }
      function vf(e) {
        return new ye((t) => {
          (function RC(e, t) {
            var n, r, o, i;
            return (function bC(e, t, n, r) {
              return new (n || (n = Promise))(function (i, s) {
                function a(c) {
                  try {
                    u(r.next(c));
                  } catch (d) {
                    s(d);
                  }
                }
                function l(c) {
                  try {
                    u(r.throw(c));
                  } catch (d) {
                    s(d);
                  }
                }
                function u(c) {
                  c.done
                    ? i(c.value)
                    : (function o(i) {
                        return i instanceof n
                          ? i
                          : new n(function (s) {
                              s(i);
                            });
                      })(c.value).then(a, l);
                }
                u((r = r.apply(e, t || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (n = MC(e); !(r = yield n.next()).done; )
                  if ((t.next(r.value), t.closed)) return;
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  r && !r.done && (i = n.return) && (yield i.call(n));
                } finally {
                  if (o) throw o.error;
                }
              }
              t.complete();
            });
          })(e, t).catch((n) => t.error(n));
        });
      }
      function rn(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function xe(e, t, n = 1 / 0) {
        return ie(t)
          ? xe((r, o) => Y((i, s) => t(r, i, o, s))(Bt(e(r, o))), n)
          : ("number" == typeof t && (n = t),
            Re((r, o) =>
              (function OC(e, t, n, r, o, i, s, a) {
                const l = [];
                let u = 0,
                  c = 0,
                  d = !1;
                const f = () => {
                    d && !l.length && !u && t.complete();
                  },
                  h = (m) => (u < r ? p(m) : l.push(m)),
                  p = (m) => {
                    i && t.next(m), u++;
                    let b = !1;
                    Bt(n(m, c++)).subscribe(
                      Te(
                        t,
                        (C) => {
                          null == o || o(C), i ? h(C) : t.next(C);
                        },
                        () => {
                          b = !0;
                        },
                        void 0,
                        () => {
                          if (b)
                            try {
                              for (u--; l.length && u < r; ) {
                                const C = l.shift();
                                s ? rn(t, s, () => p(C)) : p(C);
                              }
                              f();
                            } catch (C) {
                              t.error(C);
                            }
                        }
                      )
                    );
                  };
                return (
                  e.subscribe(
                    Te(t, h, () => {
                      (d = !0), f();
                    })
                  ),
                  () => {
                    null == a || a();
                  }
                );
              })(r, o, e, n)
            ));
      }
      function mo(e = 1 / 0) {
        return xe($n, e);
      }
      const on = new ye((e) => e.complete());
      function La(e) {
        return e[e.length - 1];
      }
      function _f(e) {
        return ie(La(e)) ? e.pop() : void 0;
      }
      function yo(e) {
        return (function PC(e) {
          return e && ie(e.schedule);
        })(La(e))
          ? e.pop()
          : void 0;
      }
      function Df(e, t = 0) {
        return Re((n, r) => {
          n.subscribe(
            Te(
              r,
              (o) => rn(r, e, () => r.next(o), t),
              () => rn(r, e, () => r.complete(), t),
              (o) => rn(r, e, () => r.error(o), t)
            )
          );
        });
      }
      function Cf(e, t = 0) {
        return Re((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function bf(e, t) {
        if (!e) throw new Error("Iterable cannot be null");
        return new ye((n) => {
          rn(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            rn(
              n,
              t,
              () => {
                r.next().then((o) => {
                  o.done ? n.complete() : n.next(o.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      function Fe(e, t) {
        return t
          ? (function $C(e, t) {
              if (null != e) {
                if (df(e))
                  return (function LC(e, t) {
                    return Bt(e).pipe(Cf(t), Df(t));
                  })(e, t);
                if (uf(e))
                  return (function jC(e, t) {
                    return new ye((n) => {
                      let r = 0;
                      return t.schedule(function () {
                        r === e.length
                          ? n.complete()
                          : (n.next(e[r++]), n.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (cf(e))
                  return (function BC(e, t) {
                    return Bt(e).pipe(Cf(t), Df(t));
                  })(e, t);
                if (ff(e)) return bf(e, t);
                if (gf(e))
                  return (function HC(e, t) {
                    return new ye((n) => {
                      let r;
                      return (
                        rn(n, t, () => {
                          (r = e[pf]()),
                            rn(
                              n,
                              t,
                              () => {
                                let o, i;
                                try {
                                  ({ value: o, done: i } = r.next());
                                } catch (s) {
                                  return void n.error(s);
                                }
                                i ? n.complete() : n.next(o);
                              },
                              0,
                              !0
                            );
                        }),
                        () => ie(null == r ? void 0 : r.return) && r.return()
                      );
                    });
                  })(e, t);
                if (yf(e))
                  return (function UC(e, t) {
                    return bf(mf(e), t);
                  })(e, t);
              }
              throw hf(e);
            })(e, t)
          : Bt(e);
      }
      function ki(e) {
        return e <= 0
          ? () => on
          : Re((t, n) => {
              let r = 0;
              t.subscribe(
                Te(n, (o) => {
                  ++r <= e && (n.next(o), e <= r && n.complete());
                })
              );
            });
      }
      function Ba(e, t, ...n) {
        return !0 === t
          ? (e(), null)
          : !1 === t
          ? null
          : t(...n)
              .pipe(ki(1))
              .subscribe(() => e());
      }
      function ne(e) {
        for (let t in e) if (e[t] === ne) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function ja(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function X(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(X).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Ha(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const qC = ne({ __forward_ref__: ne });
      function se(e) {
        return (
          (e.__forward_ref__ = se),
          (e.toString = function () {
            return X(this());
          }),
          e
        );
      }
      function j(e) {
        return wf(e) ? e() : e;
      }
      function wf(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(qC) &&
          e.__forward_ref__ === se
        );
      }
      class Z extends Error {
        constructor(t, n) {
          super(
            (function Ua(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function O(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Oe(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : O(e);
      }
      function Pi(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new Z(-201, `No provider for ${Oe(e)} found${n}`);
      }
      function tt(e, t) {
        null == e &&
          (function re(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function N(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Ke(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function $a(e) {
        return Ef(e, Vi) || Ef(e, Af);
      }
      function Ef(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Mf(e) {
        return e && (e.hasOwnProperty(Ga) || e.hasOwnProperty(XC))
          ? e[Ga]
          : null;
      }
      const Vi = ne({ ɵprov: ne }),
        Ga = ne({ ɵinj: ne }),
        Af = ne({ ngInjectableDef: ne }),
        XC = ne({ ngInjectorDef: ne });
      var R = (() => (
        ((R = R || {})[(R.Default = 0)] = "Default"),
        (R[(R.Host = 1)] = "Host"),
        (R[(R.Self = 2)] = "Self"),
        (R[(R.SkipSelf = 4)] = "SkipSelf"),
        (R[(R.Optional = 8)] = "Optional"),
        R
      ))();
      let za;
      function Dn(e) {
        const t = za;
        return (za = e), t;
      }
      function Sf(e, t, n) {
        const r = $a(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & R.Optional
          ? null
          : void 0 !== t
          ? t
          : void Pi(X(e), "Injector");
      }
      function Cn(e) {
        return { toString: e }.toString();
      }
      var Mt = (() => (
          ((Mt = Mt || {})[(Mt.OnPush = 0)] = "OnPush"),
          (Mt[(Mt.Default = 1)] = "Default"),
          Mt
        ))(),
        jt = (() => {
          return (
            ((e = jt || (jt = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            jt
          );
          var e;
        })();
      const tb = "undefined" != typeof globalThis && globalThis,
        nb = "undefined" != typeof window && window,
        rb =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        te = tb || ("undefined" != typeof global && global) || nb || rb,
        pr = {},
        oe = [],
        Li = ne({ ɵcmp: ne }),
        qa = ne({ ɵdir: ne }),
        Wa = ne({ ɵpipe: ne }),
        If = ne({ ɵmod: ne }),
        an = ne({ ɵfac: ne }),
        vo = ne({ __NG_ELEMENT_ID__: ne });
      let ob = 0;
      function pt(e) {
        return Cn(() => {
          const n = {},
            r = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Mt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || oe,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || jt.Emulated,
              id: "c",
              styles: e.styles || oe,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            o = e.directives,
            i = e.features,
            s = e.pipes;
          return (
            (r.id += ob++),
            (r.inputs = Nf(e.inputs, n)),
            (r.outputs = Nf(e.outputs)),
            i && i.forEach((a) => a(r)),
            (r.directiveDefs = o
              ? () => ("function" == typeof o ? o() : o).map(Tf)
              : null),
            (r.pipeDefs = s
              ? () => ("function" == typeof s ? s() : s).map(xf)
              : null),
            r
          );
        });
      }
      function Tf(e) {
        return (
          Ve(e) ||
          (function bn(e) {
            return e[qa] || null;
          })(e)
        );
      }
      function xf(e) {
        return (function zn(e) {
          return e[Wa] || null;
        })(e);
      }
      const Ff = {};
      function nt(e) {
        return Cn(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || oe,
            declarations: e.declarations || oe,
            imports: e.imports || oe,
            exports: e.exports || oe,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Ff[e.id] = e.type), t;
        });
      }
      function Nf(e, t) {
        if (null == e) return pr;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let o = e[r],
              i = o;
            Array.isArray(o) && ((i = o[1]), (o = o[0])),
              (n[o] = r),
              t && (t[o] = i);
          }
        return n;
      }
      const F = pt;
      function $e(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function Ve(e) {
        return e[Li] || null;
      }
      function gt(e, t) {
        const n = e[If] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${X(e)} does not have '\u0275mod' property.`);
        return n;
      }
      const H = 11;
      function Ht(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function St(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Ja(e) {
        return 0 != (8 & e.flags);
      }
      function Ui(e) {
        return 2 == (2 & e.flags);
      }
      function $i(e) {
        return 1 == (1 & e.flags);
      }
      function It(e) {
        return null !== e.template;
      }
      function cb(e) {
        return 0 != (512 & e[2]);
      }
      function Zn(e, t) {
        return e.hasOwnProperty(an) ? e[an] : null;
      }
      class hb {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function yt() {
        return Of;
      }
      function Of(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = gb), pb;
      }
      function pb() {
        const e = Pf(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === pr) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function gb(e, t, n, r) {
        const o =
            Pf(e) ||
            (function mb(e, t) {
              return (e[kf] = t);
            })(e, { previous: pr, current: null }),
          i = o.current || (o.current = {}),
          s = o.previous,
          a = this.declaredInputs[n],
          l = s[a];
        (i[a] = new hb(l && l.currentValue, t, s === pr)), (e[r] = t);
      }
      yt.ngInherit = !0;
      const kf = "__ngSimpleChanges__";
      function Pf(e) {
        return e[kf] || null;
      }
      let tl;
      function fe(e) {
        return !!e.listen;
      }
      const Vf = {
        createRenderer: (e, t) =>
          (function nl() {
            return void 0 !== tl
              ? tl
              : "undefined" != typeof document
              ? document
              : void 0;
          })(),
      };
      function De(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Gi(e, t) {
        return De(t[e]);
      }
      function _t(e, t) {
        return De(t[e.index]);
      }
      function rl(e, t) {
        return e.data[t];
      }
      function _r(e, t) {
        return e[t];
      }
      function ot(e, t) {
        const n = t[e];
        return Ht(n) ? n : n[0];
      }
      function ol(e) {
        return 128 == (128 & e[2]);
      }
      function wn(e, t) {
        return null == t ? null : e[t];
      }
      function Bf(e) {
        e[18] = 0;
      }
      function il(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const k = { lFrame: Zf(null), bindingsEnabled: !0 };
      function Hf() {
        return k.bindingsEnabled;
      }
      function D() {
        return k.lFrame.lView;
      }
      function J() {
        return k.lFrame.tView;
      }
      function Me() {
        let e = $f();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function $f() {
        return k.lFrame.currentTNode;
      }
      function Ut(e, t) {
        const n = k.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function sl() {
        return k.lFrame.isParent;
      }
      function Ge() {
        const e = k.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Dr() {
        return k.lFrame.bindingIndex++;
      }
      function Rb(e, t) {
        const n = k.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), ll(t);
      }
      function ll(e) {
        k.lFrame.currentDirectiveIndex = e;
      }
      function cl(e) {
        k.lFrame.currentQueryIndex = e;
      }
      function kb(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Wf(e, t, n) {
        if (n & R.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & R.Host ||
              ((o = kb(i)), null === o || ((i = i[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (k.lFrame = Qf());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function qi(e) {
        const t = Qf(),
          n = e[1];
        (k.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Qf() {
        const e = k.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Zf(e) : t;
      }
      function Zf(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Jf() {
        const e = k.lFrame;
        return (
          (k.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Kf = Jf;
      function Wi() {
        const e = Jf();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function ze() {
        return k.lFrame.selectedIndex;
      }
      function En(e) {
        k.lFrame.selectedIndex = e;
      }
      function he() {
        const e = k.lFrame;
        return rl(e.tView, e.selectedIndex);
      }
      function Qi(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: a,
              ngAfterViewInit: l,
              ngAfterViewChecked: u,
              ngOnDestroy: c,
            } = i;
          s && (e.contentHooks || (e.contentHooks = [])).push(-n, s),
            a &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, a),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, a)),
            l && (e.viewHooks || (e.viewHooks = [])).push(-n, l),
            u &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, u),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, u)),
            null != c && (e.destroyHooks || (e.destroyHooks = [])).push(n, c);
        }
      }
      function Zi(e, t, n) {
        Yf(e, t, 3, n);
      }
      function Ji(e, t, n, r) {
        (3 & e[2]) === n && Yf(e, t, n, r);
      }
      function dl(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Yf(e, t, n, r) {
        const i = null != r ? r : -1,
          s = t.length - 1;
        let a = 0;
        for (let l = void 0 !== r ? 65535 & e[18] : 0; l < s; l++)
          if ("number" == typeof t[l + 1]) {
            if (((a = t[l]), null != r && a >= r)) break;
          } else
            t[l] < 0 && (e[18] += 65536),
              (a < i || -1 == i) &&
                (Gb(e, n, t, l), (e[18] = (4294901760 & e[18]) + l + 2)),
              l++;
      }
      function Gb(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(a);
            } finally {
            }
          }
        } else
          try {
            i.call(a);
          } finally {
          }
      }
      class wo {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Ki(e, t, n) {
        const r = fe(e);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if ("number" == typeof i) {
            if (0 !== i) break;
            o++;
            const s = n[o++],
              a = n[o++],
              l = n[o++];
            r ? e.setAttribute(t, a, l, s) : t.setAttributeNS(s, a, l);
          } else {
            const s = i,
              a = n[++o];
            hl(s)
              ? r && e.setProperty(t, s, a)
              : r
              ? e.setAttribute(t, s, a)
              : t.setAttribute(s, a),
              o++;
          }
        }
        return o;
      }
      function Xf(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function hl(e) {
        return 64 === e.charCodeAt(0);
      }
      function Yi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  eh(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function eh(e, t, n, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; i < e.length; ) {
            const a = e[i++];
            if ("number" == typeof a) {
              if (a === t) {
                s = -1;
                break;
              }
              if (a > t) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const a = e[i];
          if ("number" == typeof a) break;
          if (a === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, t), (i = s + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      function th(e) {
        return -1 !== e;
      }
      function Cr(e) {
        return 32767 & e;
      }
      function br(e, t) {
        let n = (function Zb(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let pl = !0;
      function Xi(e) {
        const t = pl;
        return (pl = e), t;
      }
      let Jb = 0;
      function Mo(e, t) {
        const n = ml(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          gl(r.data, e),
          gl(t, null),
          gl(r.blueprint, null));
        const o = es(e, t),
          i = e.injectorIndex;
        if (th(o)) {
          const s = Cr(o),
            a = br(o, t),
            l = a[1].data;
          for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | l[s + u];
        }
        return (t[i + 8] = o), i;
      }
      function gl(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function ml(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function es(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          const i = o[1],
            s = i.type;
          if (((r = 2 === s ? i.declTNode : 1 === s ? o[6] : null), null === r))
            return -1;
          if ((n++, (o = o[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function ts(e, t, n) {
        !(function Kb(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(vo) && (r = n[vo]),
            null == r && (r = n[vo] = Jb++);
          const o = 255 & r;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function oh(e, t, n) {
        if (n & R.Optional) return e;
        Pi(t, "NodeInjector");
      }
      function ih(e, t, n, r) {
        if (
          (n & R.Optional && void 0 === r && (r = null),
          0 == (n & (R.Self | R.Host)))
        ) {
          const o = e[9],
            i = Dn(void 0);
          try {
            return o ? o.get(t, r, n & R.Optional) : Sf(t, r, n & R.Optional);
          } finally {
            Dn(i);
          }
        }
        return oh(r, t, n);
      }
      function sh(e, t, n, r = R.Default, o) {
        if (null !== e) {
          const i = (function tw(e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(vo) ? e[vo] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : Xb) : t;
          })(n);
          if ("function" == typeof i) {
            if (!Wf(t, e, r)) return r & R.Host ? oh(o, n, r) : ih(t, n, r, o);
            try {
              const s = i(r);
              if (null != s || r & R.Optional) return s;
              Pi(n);
            } finally {
              Kf();
            }
          } else if ("number" == typeof i) {
            let s = null,
              a = ml(e, t),
              l = -1,
              u = r & R.Host ? t[16][6] : null;
            for (
              (-1 === a || r & R.SkipSelf) &&
              ((l = -1 === a ? es(e, t) : t[a + 8]),
              -1 !== l && uh(r, !1)
                ? ((s = t[1]), (a = Cr(l)), (t = br(l, t)))
                : (a = -1));
              -1 !== a;

            ) {
              const c = t[1];
              if (lh(i, a, c.data)) {
                const d = ew(a, t, n, s, r, u);
                if (d !== ah) return d;
              }
              (l = t[a + 8]),
                -1 !== l && uh(r, t[1].data[a + 8] === u) && lh(i, a, t)
                  ? ((s = c), (a = Cr(l)), (t = br(l, t)))
                  : (a = -1);
            }
          }
        }
        return ih(t, n, r, o);
      }
      const ah = {};
      function Xb() {
        return new wr(Me(), D());
      }
      function ew(e, t, n, r, o, i) {
        const s = t[1],
          a = s.data[e + 8],
          c = (function ns(e, t, n, r, o) {
            const i = e.providerIndexes,
              s = t.data,
              a = 1048575 & i,
              l = e.directiveStart,
              c = i >> 20,
              f = o ? a + c : e.directiveEnd;
            for (let h = r ? a : a + c; h < f; h++) {
              const p = s[h];
              if ((h < l && n === p) || (h >= l && p.type === n)) return h;
            }
            if (o) {
              const h = s[l];
              if (h && It(h) && h.type === n) return l;
            }
            return null;
          })(
            a,
            s,
            n,
            null == r ? Ui(a) && pl : r != s && 0 != (3 & a.type),
            o & R.Host && i === a
          );
        return null !== c ? Ao(t, s, c, a) : ah;
      }
      function Ao(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function zb(e) {
            return e instanceof wo;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function WC(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new Z(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(Oe(i[n]));
          const a = Xi(s.canSeeViewProviders);
          s.resolving = !0;
          const l = s.injectImpl ? Dn(s.injectImpl) : null;
          Wf(e, r, R.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function $b(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const s = Of(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, s);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== l && Dn(l), Xi(a), (s.resolving = !1), Kf();
          }
        }
        return o;
      }
      function lh(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function uh(e, t) {
        return !(e & R.Self || (e & R.Host && t));
      }
      class wr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return sh(this._tNode, this._lView, t, r, n);
        }
      }
      function Be(e) {
        return Cn(() => {
          const t = e.prototype.constructor,
            n = t[an] || yl(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[an] || yl(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function yl(e) {
        return wf(e)
          ? () => {
              const t = yl(j(e));
              return t && t();
            }
          : Zn(e);
      }
      function So(e) {
        return (function Yb(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (Xf(i)) break;
              if (0 === i) o += 2;
              else if ("number" == typeof i)
                for (o++; o < r && "string" == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(Me(), e);
      }
      const Mr = "__parameters__";
      function Sr(e, t, n) {
        return Cn(() => {
          const r = (function vl(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const s = new o(...i);
            return (a.annotation = s), a;
            function a(l, u, c) {
              const d = l.hasOwnProperty(Mr)
                ? l[Mr]
                : Object.defineProperty(l, Mr, { value: [] })[Mr];
              for (; d.length <= c; ) d.push(null);
              return (d[c] = d[c] || []).push(s), l;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class U {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = N({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const rw = new U("AnalyzeForEntryComponents");
      function $t(e, t) {
        e.forEach((n) => (Array.isArray(n) ? $t(n, t) : t(n)));
      }
      function dh(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function rs(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function it(e, t, n) {
        let r = Ir(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function sw(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Dl(e, t) {
        const n = Ir(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Ir(e, t) {
        return (function ph(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              s = e[i << n];
            if (t === s) return i << n;
            s > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Fo = {},
        bl = "__NG_DI_FLAG__",
        is = "ngTempTokenPath",
        hw = /\n/gm,
        mh = "__source",
        gw = ne({ provide: String, useValue: ne });
      let No;
      function yh(e) {
        const t = No;
        return (No = e), t;
      }
      function mw(e, t = R.Default) {
        if (void 0 === No) throw new Z(203, "");
        return null === No
          ? Sf(e, void 0, t)
          : No.get(e, t & R.Optional ? null : void 0, t);
      }
      function A(e, t = R.Default) {
        return (
          (function eb() {
            return za;
          })() || mw
        )(j(e), t);
      }
      const yw = A;
      function wl(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = j(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Z(900, "");
            let o,
              i = R.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                l = vw(a);
              "number" == typeof l
                ? -1 === l
                  ? (o = a.token)
                  : (i |= l)
                : (o = a);
            }
            t.push(A(o, i));
          } else t.push(A(r));
        }
        return t;
      }
      function Ro(e, t) {
        return (e[bl] = t), (e.prototype[bl] = t), e;
      }
      function vw(e) {
        return e[bl];
      }
      const ss = Ro(
          Sr("Inject", (e) => ({ token: e })),
          -1
        ),
        An = Ro(Sr("Optional"), 8),
        Oo = Ro(Sr("SkipSelf"), 4);
      class Ah {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function Sn(e) {
        return e instanceof Ah ? e.changingThisBreaksApplicationSecurity : e;
      }
      const jw =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Hw =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var Ce = (() => (
        ((Ce = Ce || {})[(Ce.NONE = 0)] = "NONE"),
        (Ce[(Ce.HTML = 1)] = "HTML"),
        (Ce[(Ce.STYLE = 2)] = "STYLE"),
        (Ce[(Ce.SCRIPT = 3)] = "SCRIPT"),
        (Ce[(Ce.URL = 4)] = "URL"),
        (Ce[(Ce.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        Ce
      ))();
      function Lo(e) {
        const t = (function Bo() {
          const e = D();
          return e && e[12];
        })();
        return t
          ? t.sanitize(Ce.URL, e) || ""
          : (function Po(e, t) {
              const n = (function Pw(e) {
                return (e instanceof Ah && e.getTypeName()) || null;
              })(e);
              if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t) return !0;
                throw new Error(
                  `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === t;
            })(e, "URL")
          ? Sn(e)
          : (function cs(e) {
              return (e = String(e)).match(jw) || e.match(Hw)
                ? e
                : "unsafe:" + e;
            })(O(e));
      }
      const Ph = "__ngContext__";
      function je(e, t) {
        e[Ph] = t;
      }
      function Nl(e) {
        const t = (function jo(e) {
          return e[Ph] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function Ol(e) {
        return e.ngOriginalError;
      }
      function cE(e, ...t) {
        e.error(...t);
      }
      class Ho {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            r = (function uE(e) {
              return (e && e.ngErrorLogger) || cE;
            })(t);
          r(this._console, "ERROR", t),
            n && r(this._console, "ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && Ol(t);
          for (; n && Ol(n); ) n = Ol(n);
          return n || null;
        }
      }
      const DE = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(te))();
      function zt(e) {
        return e instanceof Function ? e() : e;
      }
      var st = (() => (
        ((st = st || {})[(st.Important = 1)] = "Important"),
        (st[(st.DashCase = 2)] = "DashCase"),
        st
      ))();
      function Pl(e, t) {
        return undefined(e, t);
      }
      function Uo(e) {
        const t = e[3];
        return St(t) ? t[3] : t;
      }
      function Vl(e) {
        return zh(e[13]);
      }
      function Ll(e) {
        return zh(e[4]);
      }
      function zh(e) {
        for (; null !== e && !St(e); ) e = e[4];
        return e;
      }
      function Nr(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          St(r) ? (i = r) : Ht(r) && ((s = !0), (r = r[0]));
          const a = De(r);
          0 === e && null !== n
            ? null == o
              ? Kh(t, n, a)
              : Jn(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? Jn(t, n, a, o || null, !0)
            : 2 === e
            ? (function op(e, t, n) {
                const r = fs(e, t);
                r &&
                  (function OE(e, t, n, r) {
                    fe(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function VE(e, t, n, r, o) {
                const i = n[7];
                i !== De(n) && Nr(t, e, r, i, o);
                for (let a = 10; a < n.length; a++) {
                  const l = n[a];
                  $o(l[1], l, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function jl(e, t, n) {
        if (fe(e)) return e.createElement(t, n);
        {
          const r =
            null !== n
              ? (function Db(e) {
                  const t = e.toLowerCase();
                  return "svg" === t
                    ? "http://www.w3.org/2000/svg"
                    : "math" === t
                    ? "http://www.w3.org/1998/MathML/"
                    : null;
                })(n)
              : null;
          return null === r ? e.createElement(t) : e.createElementNS(r, t);
        }
      }
      function Wh(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          o = t[3];
        1024 & t[2] && ((t[2] &= -1025), il(o, -1)), n.splice(r, 1);
      }
      function Hl(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && Wh(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = rs(e, 10 + t);
          !(function AE(e, t) {
            $o(e, t, t[H], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const s = i[19];
          null !== s && s.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function Qh(e, t) {
        if (!(256 & t[2])) {
          const n = t[H];
          fe(n) && n.destroyNode && $o(e, t, n, 3, null, null),
            (function TE(e) {
              let t = e[13];
              if (!t) return Ul(e[1], e);
              for (; t; ) {
                let n = null;
                if (Ht(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Ht(t) && Ul(t[1], t), (t = t[3]);
                  null === t && (t = e), Ht(t) && Ul(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ul(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function RE(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof wo)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          l = i[s + 1];
                        try {
                          l.call(a);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function NE(e, t) {
              const n = e.cleanup,
                r = t[7];
              let o = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const s = n[i + 1],
                      a = "function" == typeof s ? s(t) : De(t[s]),
                      l = r[(o = n[i + 2])],
                      u = n[i + 3];
                    "boolean" == typeof u
                      ? a.removeEventListener(n[i], l, u)
                      : u >= 0
                      ? r[(o = u)]()
                      : r[(o = -u)].unsubscribe(),
                      (i += 2);
                  } else {
                    const s = r[(o = n[i + 1])];
                    n[i].call(s);
                  }
              if (null !== r) {
                for (let i = o + 1; i < r.length; i++) r[i]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && fe(t[H]) && t[H].destroy();
          const n = t[17];
          if (null !== n && St(t[3])) {
            n !== t[3] && Wh(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function Zh(e, t, n) {
        return (function Jh(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const o = e.data[r.directiveStart].encapsulation;
            if (o === jt.None || o === jt.Emulated) return null;
          }
          return _t(r, n);
        })(e, t.parent, n);
      }
      function Jn(e, t, n, r, o) {
        fe(e) ? e.insertBefore(t, n, r, o) : t.insertBefore(n, r, o);
      }
      function Kh(e, t, n) {
        fe(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function Yh(e, t, n, r, o) {
        null !== r ? Jn(e, t, n, r, o) : Kh(e, t, n);
      }
      function fs(e, t) {
        return fe(e) ? e.parentNode(t) : t.parentNode;
      }
      let tp = function ep(e, t, n) {
        return 40 & e.type ? _t(e, n) : null;
      };
      function hs(e, t, n, r) {
        const o = Zh(e, r, t),
          i = t[H],
          a = (function Xh(e, t, n) {
            return tp(e, t, n);
          })(r.parent || t[6], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let l = 0; l < n.length; l++) Yh(i, o, n[l], a, !1);
          else Yh(i, o, n, a, !1);
      }
      function ps(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return _t(t, e);
          if (4 & n) return Gl(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return ps(e, r);
            {
              const o = e[t.index];
              return St(o) ? Gl(-1, o) : De(o);
            }
          }
          if (32 & n) return Pl(t, e)() || De(e[t.index]);
          {
            const r = rp(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : ps(Uo(e[16]), r)
              : ps(e, t.next);
          }
        }
        return null;
      }
      function rp(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function Gl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[1].firstChild;
          if (null !== o) return ps(r, o);
        }
        return t[7];
      }
      function zl(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          if (
            (s && 0 === t && (a && je(De(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & l) zl(e, t, n.child, r, o, i, !1), Nr(t, e, o, a, i);
            else if (32 & l) {
              const u = Pl(n, r);
              let c;
              for (; (c = u()); ) Nr(t, e, o, c, i);
              Nr(t, e, o, a, i);
            } else 16 & l ? ip(e, t, r, n, o, i) : Nr(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function $o(e, t, n, r, o, i) {
        zl(n, r, e.firstChild, t, o, i, !1);
      }
      function ip(e, t, n, r, o, i) {
        const s = n[16],
          l = s[6].projection[r.projection];
        if (Array.isArray(l))
          for (let u = 0; u < l.length; u++) Nr(t, e, o, l[u], i);
        else zl(e, t, l, s[3], o, i, !0);
      }
      function sp(e, t, n) {
        fe(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function ql(e, t, n) {
        fe(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function ap(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const lp = "ng-template";
      function BE(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let o = e[r++];
          if (n && "class" === o) {
            if (((o = e[r]), -1 !== ap(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; r < e.length && "string" == typeof (o = e[r++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function up(e) {
        return 4 === e.type && e.value !== lp;
      }
      function jE(e, t, n) {
        return t === (4 !== e.type || n ? e.value : lp);
      }
      function HE(e, t, n) {
        let r = 4;
        const o = e.attrs || [],
          i = (function GE(e) {
            for (let t = 0; t < e.length; t++) if (Xf(e[t])) return t;
            return e.length;
          })(o);
        let s = !1;
        for (let a = 0; a < t.length; a++) {
          const l = t[a];
          if ("number" != typeof l) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !jE(e, l, n)) || ("" === l && 1 === t.length))
                ) {
                  if (Tt(r)) return !1;
                  s = !0;
                }
              } else {
                const u = 8 & r ? l : t[++a];
                if (8 & r && null !== e.attrs) {
                  if (!BE(e.attrs, u, n)) {
                    if (Tt(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                const d = UE(8 & r ? "class" : l, o, up(e), n);
                if (-1 === d) {
                  if (Tt(r)) return !1;
                  s = !0;
                  continue;
                }
                if ("" !== u) {
                  let f;
                  f = d > i ? "" : o[d + 1].toLowerCase();
                  const h = 8 & r ? f : null;
                  if ((h && -1 !== ap(h, u, 0)) || (2 & r && u !== f)) {
                    if (Tt(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !Tt(r) && !Tt(l)) return !1;
            if (s && Tt(l)) continue;
            (s = !1), (r = l | (1 & r));
          }
        }
        return Tt(r) || s;
      }
      function Tt(e) {
        return 0 == (1 & e);
      }
      function UE(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const s = t[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let a = t[++o];
                for (; "string" == typeof a; ) a = t[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function zE(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function cp(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (HE(e, t[r], n)) return !0;
        return !1;
      }
      function dp(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function WE(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ("string" == typeof s)
            if (2 & r) {
              const a = e[++n];
              o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
            } else 8 & r ? (o += "." + s) : 4 & r && (o += " " + s);
          else
            "" !== o && !Tt(s) && ((t += dp(i, o)), (o = "")),
              (r = s),
              (i = i || !Tt(r));
          n++;
        }
        return "" !== o && (t += dp(i, o)), t;
      }
      const P = {};
      function I(e) {
        fp(J(), D(), ze() + e, !1);
      }
      function fp(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && Zi(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Ji(t, i, 0, n);
          }
        En(n);
      }
      function gs(e, t) {
        return (e << 17) | (t << 2);
      }
      function xt(e) {
        return (e >> 17) & 32767;
      }
      function Wl(e) {
        return 2 | e;
      }
      function cn(e) {
        return (131068 & e) >> 2;
      }
      function Ql(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Zl(e) {
        return 1 | e;
      }
      function wp(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const o = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const s = e.data[i];
              cl(o), s.contentQueries(2, t[i], i);
            }
          }
      }
      function Go(e, t, n, r, o, i, s, a, l, u) {
        const c = t.blueprint.slice();
        return (
          (c[0] = o),
          (c[2] = 140 | r),
          Bf(c),
          (c[3] = c[15] = e),
          (c[8] = n),
          (c[10] = s || (e && e[10])),
          (c[H] = a || (e && e[H])),
          (c[12] = l || (e && e[12]) || null),
          (c[9] = u || (e && e[9]) || null),
          (c[6] = i),
          (c[16] = 2 == t.type ? e[16] : c),
          c
        );
      }
      function Rr(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function ou(e, t, n, r, o) {
            const i = $f(),
              s = sl(),
              l = (e.data[t] = (function f0(e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, s ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = l),
              null !== i &&
                (s
                  ? null == i.child && null !== l.parent && (i.child = l)
                  : null === i.next && (i.next = l)),
              l
            );
          })(e, t, n, r, o)),
            (function Nb() {
              return k.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function bo() {
            const e = k.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return Ut(i, !0), i;
      }
      function Or(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function zo(e, t, n) {
        qi(t);
        try {
          const r = e.viewQuery;
          null !== r && hu(1, r, n);
          const o = e.template;
          null !== o && Ep(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && wp(e, t),
            e.staticViewQueries && hu(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function u0(e, t) {
              for (let n = 0; n < t.length; n++) x0(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Wi();
        }
      }
      function kr(e, t, n, r) {
        const o = t[2];
        if (256 != (256 & o)) {
          qi(t);
          try {
            Bf(t),
              (function Gf(e) {
                return (k.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && Ep(e, t, n, 2, r);
            const s = 3 == (3 & o);
            if (s) {
              const u = e.preOrderCheckHooks;
              null !== u && Zi(t, u, null);
            } else {
              const u = e.preOrderHooks;
              null !== u && Ji(t, u, 0, null), dl(t, 0);
            }
            if (
              ((function I0(e) {
                for (let t = Vl(e); null !== t; t = Ll(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r],
                      i = o[3];
                    0 == (1024 & o[2]) && il(i, 1), (o[2] |= 1024);
                  }
                }
              })(t),
              (function S0(e) {
                for (let t = Vl(e); null !== t; t = Ll(t))
                  for (let n = 10; n < t.length; n++) {
                    const r = t[n],
                      o = r[1];
                    ol(r) && kr(o, r, o.template, r[8]);
                  }
              })(t),
              null !== e.contentQueries && wp(e, t),
              s)
            ) {
              const u = e.contentCheckHooks;
              null !== u && Zi(t, u);
            } else {
              const u = e.contentHooks;
              null !== u && Ji(t, u, 1), dl(t, 1);
            }
            !(function a0(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let r = 0; r < n.length; r++) {
                    const o = n[r];
                    if (o < 0) En(~o);
                    else {
                      const i = o,
                        s = n[++r],
                        a = n[++r];
                      Rb(s, i), a(2, t[i]);
                    }
                  }
                } finally {
                  En(-1);
                }
            })(e, t);
            const a = e.components;
            null !== a &&
              (function l0(e, t) {
                for (let n = 0; n < t.length; n++) T0(e, t[n]);
              })(t, a);
            const l = e.viewQuery;
            if ((null !== l && hu(2, l, r), s)) {
              const u = e.viewCheckHooks;
              null !== u && Zi(t, u);
            } else {
              const u = e.viewHooks;
              null !== u && Ji(t, u, 2), dl(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -73),
              1024 & t[2] && ((t[2] &= -1025), il(t[3], -1));
          } finally {
            Wi();
          }
        }
      }
      function c0(e, t, n, r) {
        const o = t[10],
          s = (function Lf(e) {
            return 4 == (4 & e[2]);
          })(t);
        try {
          !s && o.begin && o.begin(), s && zo(e, t, r), kr(e, t, n, r);
        } finally {
          !s && o.end && o.end();
        }
      }
      function Ep(e, t, n, r, o) {
        const i = ze(),
          s = 2 & r;
        try {
          En(-1), s && t.length > 20 && fp(e, t, 20, !1), n(r, o);
        } finally {
          En(i);
        }
      }
      function iu(e, t, n) {
        !Hf() ||
          ((function _0(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || Mo(n, t), je(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const l = e.data[a],
                u = It(l);
              u && E0(t, n, l);
              const c = Ao(t, e, a, n);
              je(c, t),
                null !== s && M0(0, a - o, c, l, 0, s),
                u && (ot(n.index, t)[8] = c);
            }
          })(e, t, n, _t(n, t)),
          128 == (128 & n.flags) &&
            (function D0(e, t, n) {
              const r = n.directiveStart,
                o = n.directiveEnd,
                s = n.index,
                a = (function Ob() {
                  return k.lFrame.currentDirectiveIndex;
                })();
              try {
                En(s);
                for (let l = r; l < o; l++) {
                  const u = e.data[l],
                    c = t[l];
                  ll(l),
                    (null !== u.hostBindings ||
                      0 !== u.hostVars ||
                      null !== u.hostAttrs) &&
                      Rp(u, c);
                }
              } finally {
                En(-1), ll(a);
              }
            })(e, t, n));
      }
      function su(e, t, n = _t) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              a = -1 === s ? n(t, e) : e[s];
            e[o++] = a;
          }
        }
      }
      function Ap(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = vs(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function vs(e, t, n, r, o, i, s, a, l, u) {
        const c = 20 + r,
          d = c + o,
          f = (function d0(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : P);
            return n;
          })(c, d),
          h = "function" == typeof u ? u() : u;
        return (f[1] = {
          type: e,
          blueprint: f,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: f.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: d,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof s ? s() : s,
          firstChild: null,
          schemas: l,
          consts: h,
          incompleteFirstPass: !1,
        });
      }
      function xp(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, o)
              : (n[r] = [t, o]);
          }
        return n;
      }
      function au(e, t, n, r) {
        let o = !1;
        if (Hf()) {
          const i = (function C0(e, t, n) {
              const r = e.directiveRegistry;
              let o = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const s = r[i];
                  cp(n, s.selectors, !1) &&
                    (o || (o = []),
                    ts(Mo(n, t), e, s.type),
                    It(s) ? (Op(e, n), o.unshift(s)) : o.push(s));
                }
              return o;
            })(e, t, n),
            s = null === r ? null : { "": -1 };
          if (null !== i) {
            (o = !0), kp(n, e.data.length, i.length);
            for (let c = 0; c < i.length; c++) {
              const d = i[c];
              d.providersResolver && d.providersResolver(d);
            }
            let a = !1,
              l = !1,
              u = Or(e, t, i.length, null);
            for (let c = 0; c < i.length; c++) {
              const d = i[c];
              (n.mergedAttrs = Yi(n.mergedAttrs, d.hostAttrs)),
                Pp(e, n, t, u, d),
                w0(u, d, s),
                null !== d.contentQueries && (n.flags |= 8),
                (null !== d.hostBindings ||
                  null !== d.hostAttrs ||
                  0 !== d.hostVars) &&
                  (n.flags |= 128);
              const f = d.type.prototype;
              !a &&
                (f.ngOnChanges || f.ngOnInit || f.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (a = !0)),
                !l &&
                  (f.ngOnChanges || f.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (l = !0)),
                u++;
            }
            !(function h0(e, t) {
              const r = t.directiveEnd,
                o = e.data,
                i = t.attrs,
                s = [];
              let a = null,
                l = null;
              for (let u = t.directiveStart; u < r; u++) {
                const c = o[u],
                  d = c.inputs,
                  f = null === i || up(t) ? null : A0(d, i);
                s.push(f), (a = xp(d, u, a)), (l = xp(c.outputs, u, l));
              }
              null !== a &&
                (a.hasOwnProperty("class") && (t.flags |= 16),
                a.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = s),
                (t.inputs = a),
                (t.outputs = l);
            })(e, n);
          }
          s &&
            (function b0(e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let o = 0; o < t.length; o += 2) {
                  const i = n[t[o + 1]];
                  if (null == i) throw new Z(-301, !1);
                  r.push(t[o], i);
                }
              }
            })(n, r, s);
        }
        return (n.mergedAttrs = Yi(n.mergedAttrs, n.attrs)), o;
      }
      function Np(e, t, n, r, o, i) {
        const s = i.hostBindings;
        if (s) {
          let a = e.hostBindingOpCodes;
          null === a && (a = e.hostBindingOpCodes = []);
          const l = ~t.index;
          (function v0(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(a) != l && a.push(l),
            a.push(r, o, s);
        }
      }
      function Rp(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Op(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function w0(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          It(t) && (n[""] = e);
        }
      }
      function kp(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Pp(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Zn(o.type)),
          s = new wo(i, It(o), null);
        (e.blueprint[r] = s),
          (n[r] = s),
          Np(e, t, 0, r, Or(e, n, o.hostVars, P), o);
      }
      function E0(e, t, n) {
        const r = _t(t, e),
          o = Ap(n),
          i = e[10],
          s = _s(
            e,
            Go(
              e,
              o,
              null,
              n.onPush ? 64 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        e[t.index] = s;
      }
      function qt(e, t, n, r, o, i) {
        const s = _t(e, t);
        !(function lu(e, t, n, r, o, i, s) {
          if (null == i)
            fe(e) ? e.removeAttribute(t, o, n) : t.removeAttribute(o);
          else {
            const a = null == s ? O(i) : s(i, r || "", o);
            fe(e)
              ? e.setAttribute(t, o, a, n)
              : n
              ? t.setAttributeNS(n, o, a)
              : t.setAttribute(o, a);
          }
        })(t[H], s, i, e.value, n, r, o);
      }
      function M0(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s) {
          const a = r.setInput;
          for (let l = 0; l < s.length; ) {
            const u = s[l++],
              c = s[l++],
              d = s[l++];
            null !== a ? r.setInput(n, d, u, c) : (n[c] = d);
          }
        }
      }
      function A0(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const o = t[r];
          if (0 !== o)
            if (5 !== o) {
              if ("number" == typeof o) break;
              e.hasOwnProperty(o) &&
                (null === n && (n = []), n.push(o, e[o], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Vp(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function T0(e, t) {
        const n = ot(t, e);
        if (ol(n)) {
          const r = n[1];
          80 & n[2] ? kr(r, n, r.template, n[8]) : n[5] > 0 && uu(n);
        }
      }
      function uu(e) {
        for (let r = Vl(e); null !== r; r = Ll(r))
          for (let o = 10; o < r.length; o++) {
            const i = r[o];
            if (1024 & i[2]) {
              const s = i[1];
              kr(s, i, s.template, i[8]);
            } else i[5] > 0 && uu(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = ot(n[r], e);
            ol(o) && o[5] > 0 && uu(o);
          }
      }
      function x0(e, t) {
        const n = ot(t, e),
          r = n[1];
        (function F0(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          zo(r, n, n[8]);
      }
      function _s(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function cu(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = Uo(e);
          if (cb(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Lp(e) {
        !(function du(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = Nl(n),
              o = r[1];
            c0(o, r, o.template, n);
          }
        })(e[8]);
      }
      function hu(e, t, n) {
        cl(0), t(e, n);
      }
      const R0 = (() => Promise.resolve(null))();
      function Bp(e) {
        return e[7] || (e[7] = []);
      }
      function jp(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Up(e, t) {
        const n = e[9],
          r = n ? n.get(Ho, null) : null;
        r && r.handleError(t);
      }
      function $p(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            l = t[s],
            u = e.data[s];
          null !== u.setInput ? u.setInput(l, o, r, a) : (l[a] = o);
        }
      }
      function dn(e, t, n) {
        const r = Gi(t, e);
        !(function qh(e, t, n) {
          fe(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[H], r, n);
      }
      function Ds(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            "number" == typeof a
              ? (i = a)
              : 1 == i
              ? (o = Ha(o, a))
              : 2 == i && (r = Ha(r, a + ": " + t[++s] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      const pu = new U("INJECTOR", -1);
      class Gp {
        get(t, n = Fo) {
          if (n === Fo) {
            const r = new Error(`NullInjectorError: No provider for ${X(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      const gu = new U("Set Injector scope."),
        qo = {},
        P0 = {};
      let mu;
      function zp() {
        return void 0 === mu && (mu = new Gp()), mu;
      }
      function qp(e, t = null, n = null, r) {
        const o = Wp(e, t, n, r);
        return o._resolveInjectorDefTypes(), o;
      }
      function Wp(e, t = null, n = null, r) {
        return new V0(e, n, t || zp(), r);
      }
      class V0 {
        constructor(t, n, r, o = null) {
          (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const i = [];
          n && $t(n, (a) => this.processProvider(a, t, n)),
            $t([t], (a) => this.processInjectorType(a, [], i)),
            this.records.set(pu, Pr(void 0, this));
          const s = this.records.get(gu);
          (this.scope = null != s ? s.value : null),
            (this.source = o || ("object" == typeof t ? null : X(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, n = Fo, r = R.Default) {
          this.assertNotDestroyed();
          const o = yh(this),
            i = Dn(void 0);
          try {
            if (!(r & R.SkipSelf)) {
              let a = this.records.get(t);
              if (void 0 === a) {
                const l =
                  (function z0(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof U)
                    );
                  })(t) && $a(t);
                (a = l && this.injectableDefInScope(l) ? Pr(yu(t), qo) : null),
                  this.records.set(t, a);
              }
              if (null != a) return this.hydrate(t, a);
            }
            return (r & R.Self ? zp() : this.parent).get(
              t,
              (n = r & R.Optional && n === Fo ? null : n)
            );
          } catch (s) {
            if ("NullInjectorError" === s.name) {
              if (((s[is] = s[is] || []).unshift(X(t)), o)) throw s;
              return (function _w(e, t, n, r) {
                const o = e[is];
                throw (
                  (t[mh] && o.unshift(t[mh]),
                  (e.message = (function Dw(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let o = X(t);
                    if (Array.isArray(t)) o = t.map(X).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let a = t[s];
                          i.push(
                            s +
                              ":" +
                              ("string" == typeof a ? JSON.stringify(a) : X(a))
                          );
                        }
                      o = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                      hw,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[is] = null),
                  e)
                );
              })(s, t, "R3InjectorError", this.source);
            }
            throw s;
          } finally {
            Dn(i), yh(o);
          }
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((r, o) => t.push(X(o))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Z(205, !1);
        }
        processInjectorType(t, n, r) {
          if (!(t = j(t))) return !1;
          let o = Mf(t);
          const i = (null == o && t.ngModule) || void 0,
            s = void 0 === i ? t : i,
            a = -1 !== r.indexOf(s);
          if ((void 0 !== i && (o = Mf(i)), null == o)) return !1;
          if (null != o.imports && !a) {
            let c;
            r.push(s);
            try {
              $t(o.imports, (d) => {
                this.processInjectorType(d, n, r) &&
                  (void 0 === c && (c = []), c.push(d));
              });
            } finally {
            }
            if (void 0 !== c)
              for (let d = 0; d < c.length; d++) {
                const { ngModule: f, providers: h } = c[d];
                $t(h, (p) => this.processProvider(p, f, h || oe));
              }
          }
          this.injectorDefTypes.add(s);
          const l = Zn(s) || (() => new s());
          this.records.set(s, Pr(l, qo));
          const u = o.providers;
          if (null != u && !a) {
            const c = t;
            $t(u, (d) => this.processProvider(d, c, u));
          }
          return void 0 !== i && void 0 !== t.providers;
        }
        processProvider(t, n, r) {
          let o = Vr((t = j(t))) ? t : j(t && t.provide);
          const i = (function B0(e, t, n) {
            return Zp(e) ? Pr(void 0, e.useValue) : Pr(Qp(e), qo);
          })(t);
          if (Vr(t) || !0 !== t.multi) this.records.get(o);
          else {
            let s = this.records.get(o);
            s ||
              ((s = Pr(void 0, qo, !0)),
              (s.factory = () => wl(s.multi)),
              this.records.set(o, s)),
              (o = t),
              s.multi.push(t);
          }
          this.records.set(o, i);
        }
        hydrate(t, n) {
          return (
            n.value === qo && ((n.value = P0), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function G0(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this.onDestroy.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = j(t.providedIn);
          return "string" == typeof n
            ? "any" === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function yu(e) {
        const t = $a(e),
          n = null !== t ? t.factory : Zn(e);
        if (null !== n) return n;
        if (e instanceof U) throw new Z(204, !1);
        if (e instanceof Function)
          return (function L0(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function xo(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new Z(204, !1))
              );
            const n = (function KC(e) {
              const t = e && (e[Vi] || e[Af]);
              if (t) {
                const n = (function YC(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Z(204, !1);
      }
      function Qp(e, t, n) {
        let r;
        if (Vr(e)) {
          const o = j(e);
          return Zn(o) || yu(o);
        }
        if (Zp(e)) r = () => j(e.useValue);
        else if (
          (function H0(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...wl(e.deps || []));
        else if (
          (function j0(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => A(j(e.useExisting));
        else {
          const o = j(e && (e.useClass || e.provide));
          if (
            !(function $0(e) {
              return !!e.deps;
            })(e)
          )
            return Zn(o) || yu(o);
          r = () => new o(...wl(e.deps));
        }
        return r;
      }
      function Pr(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Zp(e) {
        return null !== e && "object" == typeof e && gw in e;
      }
      function Vr(e) {
        return "function" == typeof e;
      }
      let We = (() => {
        class e {
          static create(n, r) {
            var o;
            if (Array.isArray(n)) return qp({ name: "" }, r, n, "");
            {
              const i = null !== (o = n.name) && void 0 !== o ? o : "";
              return qp({ name: i }, n.parent, n.providers, i);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Fo),
          (e.NULL = new Gp()),
          (e.ɵprov = N({ token: e, providedIn: "any", factory: () => A(pu) })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function X0(e, t) {
        Qi(Nl(e)[1], Me());
      }
      function ee(e) {
        let t = (function ag(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (It(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new Z(903, "");
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const s = e;
              (s.inputs = Du(e.inputs)),
                (s.declaredInputs = Du(e.declaredInputs)),
                (s.outputs = Du(e.outputs));
              const a = o.hostBindings;
              a && rM(e, a);
              const l = o.viewQuery,
                u = o.contentQueries;
              if (
                (l && tM(e, l),
                u && nM(e, u),
                ja(e.inputs, o.inputs),
                ja(e.declaredInputs, o.declaredInputs),
                ja(e.outputs, o.outputs),
                It(o) && o.data.animation)
              ) {
                const c = e.data;
                c.animation = (c.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let s = 0; s < i.length; s++) {
                const a = i[s];
                a && a.ngInherit && a(e), a === ee && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function eM(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = Yi(o.hostAttrs, (n = Yi(n, o.hostAttrs))));
          }
        })(r);
      }
      function Du(e) {
        return e === pr ? {} : e === oe ? [] : e;
      }
      function tM(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function nM(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function rM(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      let Cs = null;
      function Lr() {
        if (!Cs) {
          const e = te.Symbol;
          if (e && e.iterator) Cs = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Cs = r);
            }
          }
        }
        return Cs;
      }
      function Wo(e) {
        return (
          !!(function Cu(e) {
            return (
              null !== e && ("function" == typeof e || "object" == typeof e)
            );
          })(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Lr() in e))
        );
      }
      function Wt(e, t, n) {
        return (e[t] = n);
      }
      function He(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Qt(e, t, n, r) {
        const o = D();
        return He(o, Dr(), t) && (J(), qt(he(), o, e, t, n, r)), Qt;
      }
      function Nt(e, t, n, r, o, i, s, a) {
        const l = D(),
          u = J(),
          c = e + 20,
          d = u.firstCreatePass
            ? (function cM(e, t, n, r, o, i, s, a, l) {
                const u = t.consts,
                  c = Rr(t, e, 4, s || null, wn(u, a));
                au(t, n, c, wn(u, l)), Qi(t, c);
                const d = (c.tViews = vs(
                  2,
                  c,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  u
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, c),
                    (d.queries = t.queries.embeddedTView(c))),
                  c
                );
              })(c, u, l, t, n, r, o, i, s)
            : u.data[c];
        Ut(d, !1);
        const f = l[H].createComment("");
        hs(u, l, f, d),
          je(f, l),
          _s(l, (l[c] = Vp(f, l, f, d))),
          $i(d) && iu(u, l, d),
          null != s && su(l, d, a);
      }
      function xn(e) {
        return _r(
          (function Fb() {
            return k.lFrame.contextLView;
          })(),
          20 + e
        );
      }
      function v(e, t = R.Default) {
        const n = D();
        return null === n ? A(e, t) : sh(Me(), n, j(e), t);
      }
      function Au() {
        throw new Error("invalid");
      }
      function G(e, t, n) {
        const r = D();
        return (
          He(r, Dr(), t) &&
            (function at(e, t, n, r, o, i, s, a) {
              const l = _t(t, n);
              let c,
                u = t.inputs;
              !a && null != u && (c = u[r])
                ? ($p(e, n, c, r, o),
                  Ui(t) &&
                    (function g0(e, t) {
                      const n = ot(t, e);
                      16 & n[2] || (n[2] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function p0(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (o = null != s ? s(o, t.value || "", r) : o),
                  fe(i)
                    ? i.setProperty(l, r, o)
                    : hl(r) ||
                      (l.setProperty ? l.setProperty(r, o) : (l[r] = o)));
            })(J(), he(), r, e, t, r[H], n, !1),
          G
        );
      }
      function Su(e, t, n, r, o) {
        const s = o ? "class" : "style";
        $p(e, n, t.inputs[s], s, r);
      }
      function y(e, t, n, r) {
        const o = D(),
          i = J(),
          s = 20 + e,
          a = o[H],
          l = (o[s] = jl(
            a,
            t,
            (function Ub() {
              return k.lFrame.currentNamespace;
            })()
          )),
          u = i.firstCreatePass
            ? (function FM(e, t, n, r, o, i, s) {
                const a = t.consts,
                  u = Rr(t, e, 2, o, wn(a, i));
                return (
                  au(t, n, u, wn(a, s)),
                  null !== u.attrs && Ds(u, u.attrs, !1),
                  null !== u.mergedAttrs && Ds(u, u.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, u),
                  u
                );
              })(s, i, o, 0, t, n, r)
            : i.data[s];
        Ut(u, !0);
        const c = u.mergedAttrs;
        null !== c && Ki(a, l, c);
        const d = u.classes;
        null !== d && ql(a, l, d);
        const f = u.styles;
        return (
          null !== f && sp(a, l, f),
          64 != (64 & u.flags) && hs(i, o, l, u),
          0 ===
            (function Ab() {
              return k.lFrame.elementDepthCount;
            })() && je(l, o),
          (function Sb() {
            k.lFrame.elementDepthCount++;
          })(),
          $i(u) &&
            (iu(i, o, u),
            (function Mp(e, t, n) {
              if (Ja(t)) {
                const o = t.directiveEnd;
                for (let i = t.directiveStart; i < o; i++) {
                  const s = e.data[i];
                  s.contentQueries && s.contentQueries(1, n[i], i);
                }
              }
            })(i, u, o)),
          null !== r && su(o, u),
          y
        );
      }
      function _() {
        let e = Me();
        sl()
          ? (function al() {
              k.lFrame.isParent = !1;
            })()
          : ((e = e.parent), Ut(e, !1));
        const t = e;
        !(function Ib() {
          k.lFrame.elementDepthCount--;
        })();
        const n = J();
        return (
          n.firstCreatePass && (Qi(n, e), Ja(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Wb(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            Su(n, t, D(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Qb(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            Su(n, t, D(), t.stylesWithoutHost, !1),
          _
        );
      }
      function Zt(e, t, n, r) {
        return y(e, t, n, r), _(), Zt;
      }
      function Zo(e) {
        return !!e && "function" == typeof e.then;
      }
      const xu = function Tg(e) {
        return !!e && "function" == typeof e.subscribe;
      };
      function V(e, t, n, r) {
        const o = D(),
          i = J(),
          s = Me();
        return (
          (function Fg(e, t, n, r, o, i, s, a) {
            const l = $i(r),
              c = e.firstCreatePass && jp(e),
              d = t[8],
              f = Bp(t);
            let h = !0;
            if (3 & r.type || a) {
              const b = _t(r, t),
                C = a ? a(b) : b,
                g = f.length,
                S = a ? (L) => a(De(L[r.index])) : r.index;
              if (fe(n)) {
                let L = null;
                if (
                  (!a &&
                    l &&
                    (L = (function RM(e, t, n, r) {
                      const o = e.cleanup;
                      if (null != o)
                        for (let i = 0; i < o.length - 1; i += 2) {
                          const s = o[i];
                          if (s === n && o[i + 1] === r) {
                            const a = t[7],
                              l = o[i + 2];
                            return a.length > l ? a[l] : null;
                          }
                          "string" == typeof s && (i += 2);
                        }
                      return null;
                    })(e, t, o, r.index)),
                  null !== L)
                )
                  ((L.__ngLastListenerFn__ || L).__ngNextListenerFn__ = i),
                    (L.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Fu(r, t, d, i, !1);
                  const K = n.listen(C, o, i);
                  f.push(i, K), c && c.push(o, S, g, g + 1);
                }
              } else
                (i = Fu(r, t, d, i, !0)),
                  C.addEventListener(o, i, s),
                  f.push(i),
                  c && c.push(o, S, g, s);
            } else i = Fu(r, t, d, i, !1);
            const p = r.outputs;
            let m;
            if (h && null !== p && (m = p[o])) {
              const b = m.length;
              if (b)
                for (let C = 0; C < b; C += 2) {
                  const ft = t[m[C]][m[C + 1]].subscribe(i),
                    hr = f.length;
                  f.push(i, ft), c && c.push(o, r.index, hr, -(hr + 1));
                }
            }
          })(i, o, o[H], s, e, t, !!n, r),
          V
        );
      }
      function Ng(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (o) {
          return Up(e, o), !1;
        }
      }
      function Fu(e, t, n, r, o) {
        return function i(s) {
          if (s === Function) return r;
          const a = 2 & e.flags ? ot(e.index, t) : t;
          0 == (32 & t[2]) && cu(a);
          let l = Ng(t, 0, r, s),
            u = i.__ngNextListenerFn__;
          for (; u; ) (l = Ng(t, 0, u, s) && l), (u = u.__ngNextListenerFn__);
          return o && !1 === l && (s.preventDefault(), (s.returnValue = !1)), l;
        };
      }
      function Nu(e = 1) {
        return (function Pb(e) {
          return (k.lFrame.contextLView = (function Vb(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, k.lFrame.contextLView))[8];
        })(e);
      }
      function Ug(e, t, n, r, o) {
        const i = e[n + 1],
          s = null === t;
        let a = r ? xt(i) : cn(i),
          l = !1;
        for (; 0 !== a && (!1 === l || s); ) {
          const c = e[a + 1];
          BM(e[a], t) && ((l = !0), (e[a + 1] = r ? Zl(c) : Wl(c))),
            (a = r ? xt(c) : cn(c));
        }
        l && (e[n + 1] = r ? Wl(i) : Zl(i));
      }
      function BM(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && Ir(e, t) >= 0)
        );
      }
      function Es(e, t) {
        return (
          (function Rt(e, t, n, r) {
            const o = D(),
              i = J(),
              s = (function un(e) {
                const t = k.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            i.firstUpdatePass &&
              (function Kg(e, t, n, r) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const i = o[ze()],
                    s = (function Jg(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function tm(e, t) {
                    return 0 != (e.flags & (t ? 16 : 32));
                  })(i, r) &&
                    null === t &&
                    !s &&
                    (t = !1),
                    (t = (function QM(e, t, n, r) {
                      const o = (function ul(e) {
                        const t = k.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let i = r ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Jo((n = Ou(null, e, t, n, r)), t.attrs, r)),
                          (i = null));
                      else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== o)
                          if (((n = Ou(o, e, t, n, r)), null === i)) {
                            let l = (function ZM(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== cn(r)) return e[xt(r)];
                            })(e, t, r);
                            void 0 !== l &&
                              Array.isArray(l) &&
                              ((l = Ou(null, e, t, l[1], r)),
                              (l = Jo(l, t.attrs, r)),
                              (function JM(e, t, n, r) {
                                e[xt(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, l));
                          } else
                            i = (function KM(e, t, n) {
                              let r;
                              const o = t.directiveEnd;
                              for (
                                let i = 1 + t.directiveStylingLast;
                                i < o;
                                i++
                              )
                                r = Jo(r, e[i].hostAttrs, n);
                              return Jo(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== i &&
                          (r
                            ? (t.residualClasses = i)
                            : (t.residualStyles = i)),
                        n
                      );
                    })(o, i, t, r)),
                    (function VM(e, t, n, r, o, i) {
                      let s = i ? t.classBindings : t.styleBindings,
                        a = xt(s),
                        l = cn(s);
                      e[r] = n;
                      let c,
                        u = !1;
                      if (Array.isArray(n)) {
                        const d = n;
                        (c = d[1]), (null === c || Ir(d, c) > 0) && (u = !0);
                      } else c = n;
                      if (o)
                        if (0 !== l) {
                          const f = xt(e[a + 1]);
                          (e[r + 1] = gs(f, a)),
                            0 !== f && (e[f + 1] = Ql(e[f + 1], r)),
                            (e[a + 1] = (function JE(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[a + 1], r));
                        } else
                          (e[r + 1] = gs(a, 0)),
                            0 !== a && (e[a + 1] = Ql(e[a + 1], r)),
                            (a = r);
                      else
                        (e[r + 1] = gs(l, 0)),
                          0 === a ? (a = r) : (e[l + 1] = Ql(e[l + 1], r)),
                          (l = r);
                      u && (e[r + 1] = Wl(e[r + 1])),
                        Ug(e, c, r, !0),
                        Ug(e, c, r, !1),
                        (function LM(e, t, n, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i &&
                            "string" == typeof t &&
                            Ir(i, t) >= 0 &&
                            (n[r + 1] = Zl(n[r + 1]));
                        })(t, c, e, r, i),
                        (s = gs(a, l)),
                        i ? (t.classBindings = s) : (t.styleBindings = s);
                    })(o, i, t, n, s, r);
                }
              })(i, e, s, r),
              t !== P &&
                He(o, s, t) &&
                (function Xg(e, t, n, r, o, i, s, a) {
                  if (!(3 & t.type)) return;
                  const l = e.data,
                    u = l[a + 1];
                  Ms(
                    (function gp(e) {
                      return 1 == (1 & e);
                    })(u)
                      ? em(l, t, n, o, cn(u), s)
                      : void 0
                  ) ||
                    (Ms(i) ||
                      ((function pp(e) {
                        return 2 == (2 & e);
                      })(u) &&
                        (i = em(l, null, n, o, a, s))),
                    (function LE(e, t, n, r, o) {
                      const i = fe(e);
                      if (t)
                        o
                          ? i
                            ? e.addClass(n, r)
                            : n.classList.add(r)
                          : i
                          ? e.removeClass(n, r)
                          : n.classList.remove(r);
                      else {
                        let s = -1 === r.indexOf("-") ? void 0 : st.DashCase;
                        if (null == o)
                          i
                            ? e.removeStyle(n, r, s)
                            : n.style.removeProperty(r);
                        else {
                          const a =
                            "string" == typeof o && o.endsWith("!important");
                          a && ((o = o.slice(0, -10)), (s |= st.Important)),
                            i
                              ? e.setStyle(n, r, o, s)
                              : n.style.setProperty(r, o, a ? "important" : "");
                        }
                      }
                    })(r, s, Gi(ze(), n), o, i));
                })(
                  i,
                  i.data[ze()],
                  o,
                  o[H],
                  e,
                  (o[s + 1] = (function eA(e, t) {
                    return (
                      null == e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = X(Sn(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  s
                );
          })(e, t, null, !0),
          Es
        );
      }
      function Ou(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < s && ((i = t[a]), (r = Jo(r, i.hostAttrs, o)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Jo(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            "number" == typeof s
              ? (o = s)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                it(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function em(e, t, n, r, o, i) {
        const s = null === t;
        let a;
        for (; o > 0; ) {
          const l = e[o],
            u = Array.isArray(l),
            c = u ? l[1] : l,
            d = null === c;
          let f = n[o + 1];
          f === P && (f = d ? oe : void 0);
          let h = d ? Dl(f, r) : c === r ? f : void 0;
          if ((u && !Ms(h) && (h = Dl(l, r)), Ms(h) && ((a = h), s))) return a;
          const p = e[o + 1];
          o = s ? xt(p) : cn(p);
        }
        if (null !== t) {
          let l = i ? t.residualClasses : t.residualStyles;
          null != l && (a = Dl(l, r));
        }
        return a;
      }
      function Ms(e) {
        return void 0 !== e;
      }
      function w(e, t = "") {
        const n = D(),
          r = J(),
          o = e + 20,
          i = r.firstCreatePass ? Rr(r, o, 1, t, null) : r.data[o],
          s = (n[o] = (function Bl(e, t) {
            return fe(e) ? e.createText(t) : e.createTextNode(t);
          })(n[H], t));
        hs(r, n, s, i), Ut(i, !1);
      }
      function lt(e) {
        return Yn("", e, ""), lt;
      }
      function Yn(e, t, n) {
        const r = D(),
          o = (function jr(e, t, n, r) {
            return He(e, Dr(), n) ? t + O(n) + r : P;
          })(r, e, t, n);
        return o !== P && dn(r, ze(), o), Yn;
      }
      const As = "en-US";
      let wm = As;
      function Vu(e, t, n, r, o) {
        if (((e = j(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Vu(e[i], t, n, r, o);
        else {
          const i = J(),
            s = D();
          let a = Vr(e) ? e : j(e.provide),
            l = Qp(e);
          const u = Me(),
            c = 1048575 & u.providerIndexes,
            d = u.directiveStart,
            f = u.providerIndexes >> 20;
          if (Vr(e) || !e.multi) {
            const h = new wo(l, o, v),
              p = Bu(a, t, o ? c : c + f, d);
            -1 === p
              ? (ts(Mo(u, s), i, a),
                Lu(i, e, t.length),
                t.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                o && (u.providerIndexes += 1048576),
                n.push(h),
                s.push(h))
              : ((n[p] = h), (s[p] = h));
          } else {
            const h = Bu(a, t, c + f, d),
              p = Bu(a, t, c, c + f),
              m = h >= 0 && n[h],
              b = p >= 0 && n[p];
            if ((o && !b) || (!o && !m)) {
              ts(Mo(u, s), i, a);
              const C = (function _S(e, t, n, r, o) {
                const i = new wo(e, n, v);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Wm(i, o, r && !n),
                  i
                );
              })(o ? vS : yS, n.length, o, r, l);
              !o && b && (n[p].providerFactory = C),
                Lu(i, e, t.length, 0),
                t.push(a),
                u.directiveStart++,
                u.directiveEnd++,
                o && (u.providerIndexes += 1048576),
                n.push(C),
                s.push(C);
            } else Lu(i, e, h > -1 ? h : p, Wm(n[o ? p : h], l, !o && r));
            !o && r && b && n[p].componentProviders++;
          }
        }
      }
      function Lu(e, t, n, r) {
        const o = Vr(t),
          i = (function U0(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const l = (i ? j(t.useClass) : t).prototype.ngOnDestroy;
          if (l) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const c = u.indexOf(n);
              -1 === c ? u.push(n, [r, l]) : u[c + 1].push(r, l);
            } else u.push(n, l);
          }
        }
      }
      function Wm(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Bu(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function yS(e, t, n, r) {
        return ju(this.multi, []);
      }
      function vS(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = Ao(n, n[1], this.providerFactory.index, r);
          (i = a.slice(0, s)), ju(o, i);
          for (let l = s; l < a.length; l++) i.push(a[l]);
        } else (i = []), ju(o, i);
        return i;
      }
      function ju(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function ce(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function mS(e, t, n) {
              const r = J();
              if (r.firstCreatePass) {
                const o = It(e);
                Vu(n, r.data, r.blueprint, o, !0),
                  Vu(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      class Qm {}
      class bS {
        resolveComponentFactory(t) {
          throw (function CS(e) {
            const t = Error(
              `No component factory found for ${X(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let ti = (() => {
        class e {}
        return (e.NULL = new bS()), e;
      })();
      function wS() {
        return Yr(Me(), D());
      }
      function Yr(e, t) {
        return new ut(_t(e, t));
      }
      let ut = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = wS), e;
      })();
      class Jm {}
      let fn = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function AS() {
                const e = D(),
                  n = ot(Me().index, e);
                return (function MS(e) {
                  return e[H];
                })(Ht(n) ? n : e);
              })()),
            e
          );
        })(),
        SS = (() => {
          class e {}
          return (
            (e.ɵprov = N({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class ni {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const IS = new ni("13.3.8"),
        Hu = {};
      function Fs(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(De(i)), St(i)))
            for (let a = 10; a < i.length; a++) {
              const l = i[a],
                u = l[1].firstChild;
              null !== u && Fs(l[1], l, u, r);
            }
          const s = n.type;
          if (8 & s) Fs(e, t, n.child, r);
          else if (32 & s) {
            const a = Pl(n, t);
            let l;
            for (; (l = a()); ) r.push(l);
          } else if (16 & s) {
            const a = rp(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const l = Uo(t[16]);
              Fs(l[1], l, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      class ri {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Fs(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (St(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Hl(t, r), rs(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Qh(this._lView[1], this._lView);
        }
        onDestroy(t) {
          !(function Tp(e, t, n, r) {
            const o = Bp(t);
            null === n
              ? o.push(r)
              : (o.push(n), e.firstCreatePass && jp(e).push(r, o.length - 1));
          })(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          cu(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          !(function fu(e, t, n) {
            const r = t[10];
            r.begin && r.begin();
            try {
              kr(e, t, e.template, n);
            } catch (o) {
              throw (Up(t, o), o);
            } finally {
              r.end && r.end();
            }
          })(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new Z(902, "");
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function IE(e, t) {
              $o(e, t, t[H], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new Z(902, "");
          this._appRef = t;
        }
      }
      class TS extends ri {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Lp(this._view);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Km extends ti {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Ve(t);
          return new Uu(n, this.ngModule);
        }
      }
      function Ym(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class Uu extends Qm {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function QE(e) {
              return e.map(WE).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return Ym(this.componentDef.inputs);
        }
        get outputs() {
          return Ym(this.componentDef.outputs);
        }
        create(t, n, r, o) {
          const i = (o = o || this.ngModule)
              ? (function FS(e, t) {
                  return {
                    get: (n, r, o) => {
                      const i = e.get(n, Hu, o);
                      return i !== Hu || r === Hu ? i : t.get(n, r, o);
                    },
                  };
                })(t, o.injector)
              : t,
            s = i.get(Jm, Vf),
            a = i.get(SS, null),
            l = s.createRenderer(null, this.componentDef),
            u = this.componentDef.selectors[0][0] || "div",
            c = r
              ? (function Ip(e, t, n) {
                  if (fe(e)) return e.selectRootElement(t, n === jt.ShadowDom);
                  let r = "string" == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ""), r;
                })(l, r, this.componentDef.encapsulation)
              : jl(
                  s.createRenderer(null, this.componentDef),
                  u,
                  (function xS(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(u)
                ),
            d = this.componentDef.onPush ? 576 : 528,
            f = (function sg(e, t) {
              return {
                components: [],
                scheduler: e || DE,
                clean: R0,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            h = vs(0, null, null, 1, 0, null, null, null, null, null),
            p = Go(null, h, f, d, null, null, s, l, a, i);
          let m, b;
          qi(p);
          try {
            const C = (function og(e, t, n, r, o, i) {
              const s = n[1];
              n[20] = e;
              const l = Rr(s, 20, 2, "#host", null),
                u = (l.mergedAttrs = t.hostAttrs);
              null !== u &&
                (Ds(l, u, !0),
                null !== e &&
                  (Ki(o, e, u),
                  null !== l.classes && ql(o, e, l.classes),
                  null !== l.styles && sp(o, e, l.styles)));
              const c = r.createRenderer(e, t),
                d = Go(
                  n,
                  Ap(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  l,
                  r,
                  c,
                  i || null,
                  null
                );
              return (
                s.firstCreatePass &&
                  (ts(Mo(l, n), s, t.type), Op(s, l), kp(l, n.length, 1)),
                _s(n, d),
                (n[20] = d)
              );
            })(c, this.componentDef, p, s, l);
            if (c)
              if (r) Ki(l, c, ["ng-version", IS.full]);
              else {
                const { attrs: g, classes: S } = (function ZE(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    o = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === o
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === o && n.push(i);
                    else {
                      if (!Tt(o)) break;
                      o = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                g && Ki(l, c, g), S && S.length > 0 && ql(l, c, S.join(" "));
              }
            if (((b = rl(h, 20)), void 0 !== n)) {
              const g = (b.projection = []);
              for (let S = 0; S < this.ngContentSelectors.length; S++) {
                const L = n[S];
                g.push(null != L ? Array.from(L) : null);
              }
            }
            (m = (function ig(e, t, n, r, o) {
              const i = n[1],
                s = (function y0(e, t, n) {
                  const r = Me();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Pp(e, r, t, Or(e, t, 1, null), n));
                  const o = Ao(t, e, r.directiveStart, r);
                  je(o, t);
                  const i = _t(r, t);
                  return i && je(i, t), o;
                })(i, n, t);
              if (
                (r.components.push(s),
                (e[8] = s),
                o && o.forEach((l) => l(s, t)),
                t.contentQueries)
              ) {
                const l = Me();
                t.contentQueries(1, s, l.directiveStart);
              }
              const a = Me();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (En(a.index),
                  Np(n[1], a, 0, a.directiveStart, a.directiveEnd, t),
                  Rp(t, s)),
                s
              );
            })(C, this.componentDef, p, f, [X0])),
              zo(h, p, null);
          } finally {
            Wi();
          }
          return new RS(this.componentType, m, Yr(b, p), p, b);
        }
      }
      class RS extends class DS {} {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new TS(o)),
            (this.componentType = t);
        }
        get injector() {
          return new wr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      class hn {}
      class Xm {}
      const Xr = new Map();
      class ny extends hn {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Km(this));
          const r = gt(t);
          (this._bootstrapComponents = zt(r.bootstrap)),
            (this._r3Injector = Wp(
              t,
              n,
              [
                { provide: hn, useValue: this },
                { provide: ti, useValue: this.componentFactoryResolver },
              ],
              X(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = We.THROW_IF_NOT_FOUND, r = R.Default) {
          return t === We || t === hn || t === pu
            ? this
            : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class $u extends Xm {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== gt(t) &&
              (function kS(e) {
                const t = new Set();
                !(function n(r) {
                  const o = gt(r, !0),
                    i = o.id;
                  null !== i &&
                    ((function ey(e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${X(
                            t
                          )} vs ${X(t.name)}`
                        );
                    })(i, Xr.get(i), r),
                    Xr.set(i, r));
                  const s = zt(o.imports);
                  for (const a of s) t.has(a) || (t.add(a), n(a));
                })(e);
              })(t);
        }
        create(t) {
          return new ny(this.moduleType, t);
        }
      }
      function eo(e, t, n) {
        const r = Ge() + e,
          o = D();
        return o[r] === P
          ? Wt(o, r, n ? t.call(n) : t())
          : (function Qo(e, t) {
              return e[t];
            })(o, r);
      }
      function ry(e, t, n, r) {
        return (function oy(e, t, n, r, o, i) {
          const s = t + n;
          return He(e, s, o)
            ? Wt(e, s + 1, i ? r.call(i, o) : r(o))
            : oi(e, s + 1);
        })(D(), Ge(), e, t, n, r);
      }
      function oi(e, t) {
        const n = e[t];
        return n === P ? void 0 : n;
      }
      function iy(e, t, n, r, o, i, s) {
        const a = t + n;
        return (function Kn(e, t, n, r) {
          const o = He(e, t, n);
          return He(e, t + 1, r) || o;
        })(e, a, o, i)
          ? Wt(e, a + 2, s ? r.call(s, o, i) : r(o, i))
          : oi(e, a + 2);
      }
      function Gu(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const ge = class ZS extends nn {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var o, i, s;
          let a = t,
            l = n || (() => null),
            u = r;
          if (t && "object" == typeof t) {
            const d = t;
            (a = null === (o = d.next) || void 0 === o ? void 0 : o.bind(d)),
              (l = null === (i = d.error) || void 0 === i ? void 0 : i.bind(d)),
              (u =
                null === (s = d.complete) || void 0 === s ? void 0 : s.bind(d));
          }
          this.__isAsync && ((l = Gu(l)), a && (a = Gu(a)), u && (u = Gu(u)));
          const c = super.subscribe({ next: a, error: l, complete: u });
          return t instanceof ht && t.add(c), c;
        }
      };
      Symbol;
      let pn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = XS), e;
      })();
      const KS = pn,
        YS = class extends KS {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              r = Go(
                this._declarationLView,
                n,
                t,
                16,
                null,
                n.declTNode,
                null,
                null,
                null,
                null
              );
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const i = this._declarationLView[19];
            return (
              null !== i && (r[19] = i.createEmbeddedView(n)),
              zo(n, r, t),
              new ri(r)
            );
          }
        };
      function XS() {
        return (function Ns(e, t) {
          return 4 & e.type ? new YS(t, e, Yr(e, t)) : null;
        })(Me(), D());
      }
      let kt = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = eI), e;
      })();
      function eI() {
        return (function hy(e, t) {
          let n;
          const r = t[e.index];
          if (St(r)) n = r;
          else {
            let o;
            if (8 & e.type) o = De(r);
            else {
              const i = t[H];
              o = i.createComment("");
              const s = _t(e, t);
              Jn(
                i,
                fs(i, s),
                o,
                (function kE(e, t) {
                  return fe(e) ? e.nextSibling(t) : t.nextSibling;
                })(i, s),
                !1
              );
            }
            (t[e.index] = n = Vp(r, t, o, e)), _s(t, n);
          }
          return new dy(n, e, t);
        })(Me(), D());
      }
      const tI = kt,
        dy = class extends tI {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Yr(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new wr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = es(this._hostTNode, this._hostLView);
            if (th(t)) {
              const n = br(t, this._hostLView),
                r = Cr(t);
              return new wr(n[1].data[r + 8], n);
            }
            return new wr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = fy(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            const o = t.createEmbeddedView(n || {});
            return this.insert(o, r), o;
          }
          createComponent(t, n, r, o, i) {
            const s =
              t &&
              !(function To(e) {
                return "function" == typeof e;
              })(t);
            let a;
            if (s) a = n;
            else {
              const d = n || {};
              (a = d.index),
                (r = d.injector),
                (o = d.projectableNodes),
                (i = d.ngModuleRef);
            }
            const l = s ? t : new Uu(Ve(t)),
              u = r || this.parentInjector;
            if (!i && null == l.ngModule) {
              const f = (s ? u : this.parentInjector).get(hn, null);
              f && (i = f);
            }
            const c = l.create(u, o, void 0, i);
            return this.insert(c.hostView, a), c;
          }
          insert(t, n) {
            const r = t._lView,
              o = r[1];
            if (
              (function Mb(e) {
                return St(e[3]);
              })(r)
            ) {
              const c = this.indexOf(t);
              if (-1 !== c) this.detach(c);
              else {
                const d = r[3],
                  f = new dy(d, d[6], d[3]);
                f.detach(f.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            !(function xE(e, t, n, r) {
              const o = 10 + r,
                i = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[o]), dh(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const s = t[17];
              null !== s &&
                n !== s &&
                (function FE(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(s, t);
              const a = t[19];
              null !== a && a.insertView(e), (t[2] |= 128);
            })(o, r, s, i);
            const a = Gl(i, s),
              l = r[H],
              u = fs(l, s[7]);
            return (
              null !== u &&
                (function SE(e, t, n, r, o, i) {
                  (r[0] = o), (r[6] = t), $o(e, r, n, 1, o, i);
                })(o, s[6], l, r, u, a),
              t.attachToViewContainerRef(),
              dh(qu(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = fy(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Hl(this._lContainer, n);
            r && (rs(qu(this._lContainer), n), Qh(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Hl(this._lContainer, n);
            return r && null != rs(qu(this._lContainer), n) ? new ri(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function fy(e) {
        return e[8];
      }
      function qu(e) {
        return e[8] || (e[8] = []);
      }
      function ks(...e) {}
      const sc = new U("Application Initializer");
      let ac = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = ks),
              (this.reject = ks),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, o) => {
                (this.resolve = r), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const i = this.appInits[o]();
                if (Zo(i)) n.push(i);
                else if (xu(i)) {
                  const s = new Promise((a, l) => {
                    i.subscribe({ complete: a, error: l });
                  });
                  n.push(s);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((o) => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(sc, 8));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const ai = new U("AppId", {
        providedIn: "root",
        factory: function ky() {
          return `${lc()}${lc()}${lc()}`;
        },
      });
      function lc() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Py = new U("Platform Initializer"),
        uc = new U("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown",
        }),
        Vy = new U("appBootstrapListener");
      let II = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const Fn = new U("LocaleId", {
        providedIn: "root",
        factory: () =>
          yw(Fn, R.Optional | R.SkipSelf) ||
          (function TI() {
            return ("undefined" != typeof $localize && $localize.locale) || As;
          })(),
      });
      class FI {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let Ly = (() => {
        class e {
          compileModuleSync(n) {
            return new $u(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = zt(gt(n).declarations).reduce((s, a) => {
                const l = Ve(a);
                return l && s.push(new Uu(l)), s;
              }, []);
            return new FI(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const RI = (() => Promise.resolve(0))();
      function cc(e) {
        "undefined" == typeof Zone
          ? RI.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class ke {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ge(!1)),
            (this.onMicrotaskEmpty = new ge(!1)),
            (this.onStable = new ge(!1)),
            (this.onError = new ge(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function OI() {
              let e = te.requestAnimationFrame,
                t = te.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function VI(e) {
              const t = () => {
                !(function PI(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(te, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                fc(e),
                                (e.isCheckStableRunning = !0),
                                dc(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    fc(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, a) => {
                  try {
                    return By(e), n.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      jy(e);
                  }
                },
                onInvoke: (n, r, o, i, s, a, l) => {
                  try {
                    return By(e), n.invoke(o, i, s, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), jy(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          fc(e),
                          dc(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return (
            "undefined" != typeof Zone &&
            !0 === Zone.current.get("isAngularZone")
          );
        }
        static assertInAngularZone() {
          if (!ke.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (ke.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask("NgZoneEvent: " + o, t, kI, ks, ks);
          try {
            return i.runTask(s, n, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const kI = {};
      function dc(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function fc(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function By(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function jy(e) {
        e._nesting--, dc(e);
      }
      class LI {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ge()),
            (this.onMicrotaskEmpty = new ge()),
            (this.onStable = new ge()),
            (this.onError = new ge());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      let hc = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      ke.assertNotInAngularZone(),
                        cc(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                cc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, o) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (s) => s.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
            }
            whenStable(n, r, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, r, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(ke));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        BI = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), pc.addToWindow(this);
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return pc.findTestabilityInTree(this, n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = N({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            e
          );
        })();
      class jI {
        addToWindow(t) {}
        findTestabilityInTree(t, n, r) {
          return null;
        }
      }
      let pc = new jI(),
        er = null;
      const Hy = new U("AllowMultipleToken"),
        Uy = new U("PlatformOnDestroy");
      class $y {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function Gy(e, t, n = []) {
        const r = `Platform: ${t}`,
          o = new U(r);
        return (i = []) => {
          let s = gc();
          if (!s || s.injector.get(Hy, !1)) {
            const a = [...n, ...i, { provide: o, useValue: !0 }];
            e
              ? e(a)
              : (function GI(e) {
                  if (er && !er.get(Hy, !1)) throw new Z(400, "");
                  er = e;
                  const t = e.get(zy),
                    n = e.get(Py, null);
                  n && n.forEach((r) => r());
                })(
                  (function qI(e = [], t) {
                    return We.create({
                      name: t,
                      providers: [
                        { provide: gu, useValue: "platform" },
                        { provide: Uy, useValue: () => (er = null) },
                        ...e,
                      ],
                    });
                  })(a, r)
                );
          }
          return (function zI(e) {
            const t = gc();
            if (!t) throw new Z(401, "");
            return t;
          })();
        };
      }
      function gc() {
        var e;
        return null !== (e = null == er ? void 0 : er.get(zy)) && void 0 !== e
          ? e
          : null;
      }
      let zy = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const a = (function WI(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new LI()
                      : ("zone.js" === e ? void 0 : e) ||
                        new ke({
                          enableLongStackTrace: !1,
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(r ? r.ngZone : void 0, {
                ngZoneEventCoalescing: (r && r.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (r && r.ngZoneRunCoalescing) || !1,
              }),
              l = [{ provide: ke, useValue: a }];
            return a.run(() => {
              const u = We.create({
                  providers: l,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                c = n.create(u),
                d = c.injector.get(Ho, null);
              if (!d) throw new Z(402, "");
              return (
                a.runOutsideAngular(() => {
                  const f = a.onError.subscribe({
                    next: (h) => {
                      d.handleError(h);
                    },
                  });
                  c.onDestroy(() => {
                    yc(this._modules, c), f.unsubscribe();
                  });
                }),
                (function QI(e, t, n) {
                  try {
                    const r = n();
                    return Zo(r)
                      ? r.catch((o) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(o)), o)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(d, a, () => {
                  const f = c.injector.get(ac);
                  return (
                    f.runInitializers(),
                    f.donePromise.then(
                      () => (
                        (function MA(e) {
                          tt(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (wm = e.toLowerCase().replace(/_/g, "-"));
                        })(c.injector.get(Fn, As) || As),
                        this._moduleDoBootstrap(c),
                        c
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const o = qy({}, r);
            return (function UI(e, t, n) {
              const r = new $u(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, o));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(mc);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((o) => r.bootstrap(o));
            else {
              if (!n.instance.ngDoBootstrap) throw new Z(403, "");
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Z(404, "");
            this._modules.slice().forEach((r) => r.destroy()),
              this._destroyListeners.forEach((r) => r());
            const n = this._injector.get(Uy, null);
            null == n || n(), (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(We));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      function qy(e, t) {
        return Array.isArray(t)
          ? t.reduce(qy, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let mc = (() => {
        class e {
          constructor(n, r, o, i) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = o),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const s = new ye((l) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    l.next(this._stable), l.complete();
                  });
              }),
              a = new ye((l) => {
                let u;
                this._zone.runOutsideAngular(() => {
                  u = this._zone.onStable.subscribe(() => {
                    ke.assertNotInAngularZone(),
                      cc(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), l.next(!0));
                      });
                  });
                });
                const c = this._zone.onUnstable.subscribe(() => {
                  ke.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        l.next(!1);
                      }));
                });
                return () => {
                  u.unsubscribe(), c.unsubscribe();
                };
              });
            this.isStable = (function GC(...e) {
              const t = yo(e),
                n = (function VC(e, t) {
                  return "number" == typeof La(e) ? e.pop() : t;
                })(e, 1 / 0),
                r = e;
              return r.length
                ? 1 === r.length
                  ? Bt(r[0])
                  : mo(n)(Fe(r, t))
                : on;
            })(
              s,
              a.pipe(
                (function zC(e = {}) {
                  const {
                    connector: t = () => new nn(),
                    resetOnError: n = !0,
                    resetOnComplete: r = !0,
                    resetOnRefCountZero: o = !0,
                  } = e;
                  return (i) => {
                    let s = null,
                      a = null,
                      l = null,
                      u = 0,
                      c = !1,
                      d = !1;
                    const f = () => {
                        null == a || a.unsubscribe(), (a = null);
                      },
                      h = () => {
                        f(), (s = l = null), (c = d = !1);
                      },
                      p = () => {
                        const m = s;
                        h(), null == m || m.unsubscribe();
                      };
                    return Re((m, b) => {
                      u++, !d && !c && f();
                      const C = (l = null != l ? l : t());
                      b.add(() => {
                        u--, 0 === u && !d && !c && (a = Ba(p, o));
                      }),
                        C.subscribe(b),
                        s ||
                          ((s = new Ri({
                            next: (g) => C.next(g),
                            error: (g) => {
                              (d = !0), f(), (a = Ba(h, n, g)), C.error(g);
                            },
                            complete: () => {
                              (c = !0), f(), (a = Ba(h, r)), C.complete();
                            },
                          })),
                          Fe(m).subscribe(s));
                    })(i);
                  };
                })()
              )
            );
          }
          bootstrap(n, r) {
            if (!this._initStatus.done) throw new Z(405, "");
            let o;
            (o =
              n instanceof Qm
                ? n
                : this._injector.get(ti).resolveComponentFactory(n)),
              this.componentTypes.push(o.componentType);
            const i = (function $I(e) {
                return e.isBoundToModule;
              })(o)
                ? void 0
                : this._injector.get(hn),
              a = o.create(We.NULL, [], r || o.selector, i),
              l = a.location.nativeElement,
              u = a.injector.get(hc, null),
              c = u && a.injector.get(BI);
            return (
              u && c && c.registerApplication(l, u),
              a.onDestroy(() => {
                this.detachView(a.hostView),
                  yc(this.components, a),
                  c && c.unregisterApplication(l);
              }),
              this._loadComponent(a),
              a
            );
          }
          tick() {
            if (this._runningTick) throw new Z(101, "");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            yc(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(Vy, [])
                .concat(this._bootstrapListeners)
                .forEach((o) => o(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(ke), A(We), A(Ho), A(ac));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function yc(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let Qy = !0,
        Ps = (() => {
          class e {}
          return (e.__NG_ELEMENT_ID__ = KI), e;
        })();
      function KI(e) {
        return (function YI(e, t, n) {
          if (Ui(e) && !n) {
            const r = ot(e.index, t);
            return new ri(r, r);
          }
          return 47 & e.type ? new ri(t[16], t) : null;
        })(Me(), D(), 16 == (16 & e));
      }
      class Xy {
        constructor() {}
        supports(t) {
          return Wo(t);
        }
        create(t) {
          return new oT(t);
        }
      }
      const rT = (e, t) => t;
      class oT {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || rT);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const s = !r || (n && n.currentIndex < tv(r, o, i)) ? n : r,
              a = tv(s, o, i),
              l = s.currentIndex;
            if (s === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) o++;
            else {
              i || (i = []);
              const u = a - o,
                c = l - o;
              if (u != c) {
                for (let f = 0; f < u; f++) {
                  const h = f < i.length ? i[f] : (i[f] = 0),
                    p = h + f;
                  c <= p && p < u && (i[f] = h + 1);
                }
                i[s.previousIndex] = c - u;
              }
            }
            a !== l && t(s, a, l);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Wo(t))) throw new Z(900, "");
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            s,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++)
              (i = t[a]),
                (s = this._trackByFn(a, i)),
                null !== n && Object.is(n.trackById, s)
                  ? (r && (n = this._verifyReinsertion(n, i, s, a)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, s, a)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function uM(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Lr()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (a) => {
                (s = this._trackByFn(o, a)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, a, s, o)),
                      Object.is(n.item, a) || this._addIdentityChange(n, a))
                    : ((n = this._mismatch(n, a, s, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new iT(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ev()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new ev()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class iT {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class sT {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class ev {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new sT()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function tv(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      function rv() {
        return new Bs([new Xy()]);
      }
      let Bs = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || rv()),
              deps: [[e, new Oo(), new An()]],
            };
          }
          find(n) {
            const r = this.factories.find((o) => o.supports(n));
            if (null != r) return r;
            throw new Z(901, "");
          }
        }
        return (e.ɵprov = N({ token: e, providedIn: "root", factory: rv })), e;
      })();
      const dT = Gy(null, "core", []);
      let fT = (() => {
          class e {
            constructor(n) {}
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(mc));
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({})),
            e
          );
        })(),
        js = null;
      function Yt() {
        return js;
      }
      const ct = new U("DocumentToken");
      let nr = (() => {
        class e {
          historyGo(n) {
            throw new Error("Not implemented");
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = N({
            token: e,
            factory: function () {
              return (function mT() {
                return A(iv);
              })();
            },
            providedIn: "platform",
          })),
          e
        );
      })();
      const yT = new U("Location Initialized");
      let iv = (() => {
        class e extends nr {
          constructor(n) {
            super(), (this._doc = n), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Yt().getBaseHref(this._doc);
          }
          onPopState(n) {
            const r = Yt().getGlobalEventTarget(this._doc, "window");
            return (
              r.addEventListener("popstate", n, !1),
              () => r.removeEventListener("popstate", n)
            );
          }
          onHashChange(n) {
            const r = Yt().getGlobalEventTarget(this._doc, "window");
            return (
              r.addEventListener("hashchange", n, !1),
              () => r.removeEventListener("hashchange", n)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(n) {
            this.location.pathname = n;
          }
          pushState(n, r, o) {
            sv() ? this._history.pushState(n, r, o) : (this.location.hash = o);
          }
          replaceState(n, r, o) {
            sv()
              ? this._history.replaceState(n, r, o)
              : (this.location.hash = o);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(n = 0) {
            this._history.go(n);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(ct));
          }),
          (e.ɵprov = N({
            token: e,
            factory: function () {
              return (function vT() {
                return new iv(A(ct));
              })();
            },
            providedIn: "platform",
          })),
          e
        );
      })();
      function sv() {
        return !!window.history.pushState;
      }
      function bc(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        let n = 0;
        return (
          e.endsWith("/") && n++,
          t.startsWith("/") && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        );
      }
      function av(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
      }
      function gn(e) {
        return e && "?" !== e[0] ? "?" + e : e;
      }
      let no = (() => {
        class e {
          historyGo(n) {
            throw new Error("Not implemented");
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = N({
            token: e,
            factory: function () {
              return (function _T(e) {
                const t = A(ct).location;
                return new lv(A(nr), (t && t.origin) || "");
              })();
            },
            providedIn: "root",
          })),
          e
        );
      })();
      const wc = new U("appBaseHref");
      let lv = (() => {
          class e extends no {
            constructor(n, r) {
              if (
                (super(),
                (this._platformLocation = n),
                (this._removeListenerFns = []),
                null == r && (r = this._platformLocation.getBaseHrefFromDOM()),
                null == r)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = r;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(n) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(n),
                this._platformLocation.onHashChange(n)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(n) {
              return bc(this._baseHref, n);
            }
            path(n = !1) {
              const r =
                  this._platformLocation.pathname +
                  gn(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && n ? `${r}${o}` : r;
            }
            pushState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + gn(i));
              this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + gn(i));
              this._platformLocation.replaceState(n, r, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(n = 0) {
              var r, o;
              null === (o = (r = this._platformLocation).historyGo) ||
                void 0 === o ||
                o.call(r, n);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(nr), A(wc, 8));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        DT = (() => {
          class e extends no {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != r && (this._baseHref = r);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(n) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(n),
                this._platformLocation.onHashChange(n)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(n = !1) {
              let r = this._platformLocation.hash;
              return null == r && (r = "#"), r.length > 0 ? r.substring(1) : r;
            }
            prepareExternalUrl(n) {
              const r = bc(this._baseHref, n);
              return r.length > 0 ? "#" + r : r;
            }
            pushState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + gn(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + gn(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(n, r, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(n = 0) {
              var r, o;
              null === (o = (r = this._platformLocation).historyGo) ||
                void 0 === o ||
                o.call(r, n);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(nr), A(wc, 8));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Ec = (() => {
          class e {
            constructor(n, r) {
              (this._subject = new ge()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = n);
              const o = this._platformStrategy.getBaseHref();
              (this._platformLocation = r),
                (this._baseHref = av(uv(o))),
                this._platformStrategy.onPopState((i) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: i.state,
                    type: i.type,
                  });
                });
            }
            path(n = !1) {
              return this.normalize(this._platformStrategy.path(n));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(n, r = "") {
              return this.path() == this.normalize(n + gn(r));
            }
            normalize(n) {
              return e.stripTrailingSlash(
                (function bT(e, t) {
                  return e && t.startsWith(e) ? t.substring(e.length) : t;
                })(this._baseHref, uv(n))
              );
            }
            prepareExternalUrl(n) {
              return (
                n && "/" !== n[0] && (n = "/" + n),
                this._platformStrategy.prepareExternalUrl(n)
              );
            }
            go(n, r = "", o = null) {
              this._platformStrategy.pushState(o, "", n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + gn(r)),
                  o
                );
            }
            replaceState(n, r = "", o = null) {
              this._platformStrategy.replaceState(o, "", n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + gn(r)),
                  o
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(n = 0) {
              var r, o;
              null === (o = (r = this._platformStrategy).historyGo) ||
                void 0 === o ||
                o.call(r, n);
            }
            onUrlChange(n) {
              this._urlChangeListeners.push(n),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((r) => {
                    this._notifyUrlChangeListeners(r.url, r.state);
                  }));
            }
            _notifyUrlChangeListeners(n = "", r) {
              this._urlChangeListeners.forEach((o) => o(n, r));
            }
            subscribe(n, r, o) {
              return this._subject.subscribe({
                next: n,
                error: r,
                complete: o,
              });
            }
          }
          return (
            (e.normalizeQueryParams = gn),
            (e.joinWithSlash = bc),
            (e.stripTrailingSlash = av),
            (e.ɵfac = function (n) {
              return new (n || e)(A(no), A(nr));
            }),
            (e.ɵprov = N({
              token: e,
              factory: function () {
                return (function CT() {
                  return new Ec(A(no), A(nr));
                })();
              },
              providedIn: "root",
            })),
            e
          );
        })();
      function uv(e) {
        return e.replace(/\/index.html$/, "");
      }
      function vv(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(";")) {
          const r = n.indexOf("="),
            [o, i] = -1 == r ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
          if (o.trim() === t) return decodeURIComponent(i);
        }
        return null;
      }
      class ax {
        constructor(t, n, r, o) {
          (this.$implicit = t),
            (this.ngForOf = n),
            (this.index = r),
            (this.count = o);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Oc = (() => {
        class e {
          constructor(n, r, o) {
            (this._viewContainer = n),
              (this._template = r),
              (this._differs = o),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(n) {
            (this._ngForOf = n), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(n) {
            this._trackByFn = n;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(n) {
            n && (this._template = n);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              !this._differ &&
                n &&
                (this._differ = this._differs
                  .find(n)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const n = this._differ.diff(this._ngForOf);
              n && this._applyChanges(n);
            }
          }
          _applyChanges(n) {
            const r = this._viewContainer;
            n.forEachOperation((o, i, s) => {
              if (null == o.previousIndex)
                r.createEmbeddedView(
                  this._template,
                  new ax(o.item, this._ngForOf, -1, -1),
                  null === s ? void 0 : s
                );
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), _v(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange((o) => {
              _v(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(kt), v(pn), v(Bs));
          }),
          (e.ɵdir = F({
            type: e,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          e
        );
      })();
      function _v(e, t) {
        e.context.$implicit = t.item;
      }
      let kc = (() => {
        class e {
          constructor(n, r) {
            (this._viewContainer = n),
              (this._context = new lx()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = r);
          }
          set ngIf(n) {
            (this._context.$implicit = this._context.ngIf = n),
              this._updateView();
          }
          set ngIfThen(n) {
            Dv("ngIfThen", n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            Dv("ngIfElse", n),
              (this._elseTemplateRef = n),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(kt), v(pn));
          }),
          (e.ɵdir = F({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          e
        );
      })();
      class lx {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Dv(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${X(t)}'.`
          );
      }
      let kx = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = nt({ type: e })),
          (e.ɵinj = Ke({})),
          e
        );
      })();
      let Bx = (() => {
        class e {}
        return (
          (e.ɵprov = N({
            token: e,
            providedIn: "root",
            factory: () => new jx(A(ct), window),
          })),
          e
        );
      })();
      class jx {
        constructor(t, n) {
          (this.document = t), (this.window = n), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(t) {
          this.supportsScrolling() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (!this.supportsScrolling()) return;
          const n = (function Hx(e, t) {
            const n = e.getElementById(t) || e.getElementsByName(t)[0];
            if (n) return n;
            if (
              "function" == typeof e.createTreeWalker &&
              e.body &&
              (e.body.createShadowRoot || e.body.attachShadow)
            ) {
              const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let o = r.currentNode;
              for (; o; ) {
                const i = o.shadowRoot;
                if (i) {
                  const s =
                    i.getElementById(t) || i.querySelector(`[name="${t}"]`);
                  if (s) return s;
                }
                o = r.nextNode();
              }
            }
            return null;
          })(this.document, t);
          n && (this.scrollToElement(n), n.focus());
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const n = this.window.history;
            n && n.scrollRestoration && (n.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const n = t.getBoundingClientRect(),
            r = n.left + this.window.pageXOffset,
            o = n.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(r - i[0], o - i[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const t =
              Ev(this.window.history) ||
              Ev(Object.getPrototypeOf(this.window.history));
            return !(!t || (!t.writable && !t.set));
          } catch (t) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (t) {
            return !1;
          }
        }
      }
      function Ev(e) {
        return Object.getOwnPropertyDescriptor(e, "scrollRestoration");
      }
      class Mv {}
      class jc extends class Ux extends class gT {} {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      } {
        static makeCurrent() {
          !(function pT(e) {
            js || (js = e);
          })(new jc());
        }
        onAndCancel(t, n, r) {
          return (
            t.addEventListener(n, r, !1),
            () => {
              t.removeEventListener(n, r, !1);
            }
          );
        }
        dispatchEvent(t, n) {
          t.dispatchEvent(n);
        }
        remove(t) {
          t.parentNode && t.parentNode.removeChild(t);
        }
        createElement(t, n) {
          return (n = n || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, n) {
          return "window" === n
            ? window
            : "document" === n
            ? t
            : "body" === n
            ? t.body
            : null;
        }
        getBaseHref(t) {
          const n = (function $x() {
            return (
              (di = di || document.querySelector("base")),
              di ? di.getAttribute("href") : null
            );
          })();
          return null == n
            ? null
            : (function Gx(e) {
                (Js = Js || document.createElement("a")),
                  Js.setAttribute("href", e);
                const t = Js.pathname;
                return "/" === t.charAt(0) ? t : `/${t}`;
              })(n);
        }
        resetBaseElement() {
          di = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return vv(document.cookie, t);
        }
      }
      let Js,
        di = null;
      const Av = new U("TRANSITION_ID"),
        qx = [
          {
            provide: sc,
            useFactory: function zx(e, t, n) {
              return () => {
                n.get(ac).donePromise.then(() => {
                  const r = Yt(),
                    o = t.querySelectorAll(`style[ng-transition="${e}"]`);
                  for (let i = 0; i < o.length; i++) r.remove(o[i]);
                });
              };
            },
            deps: [Av, ct, We],
            multi: !0,
          },
        ];
      class Hc {
        static init() {
          !(function HI(e) {
            pc = e;
          })(new Hc());
        }
        addToWindow(t) {
          (te.getAngularTestability = (r, o = !0) => {
            const i = t.findTestabilityInTree(r, o);
            if (null == i)
              throw new Error("Could not find testability for element.");
            return i;
          }),
            (te.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (te.getAllAngularRootElements = () => t.getAllRootElements()),
            te.frameworkStabilizers || (te.frameworkStabilizers = []),
            te.frameworkStabilizers.push((r) => {
              const o = te.getAllAngularTestabilities();
              let i = o.length,
                s = !1;
              const a = function (l) {
                (s = s || l), i--, 0 == i && r(s);
              };
              o.forEach(function (l) {
                l.whenStable(a);
              });
            });
        }
        findTestabilityInTree(t, n, r) {
          if (null == n) return null;
          const o = t.getTestability(n);
          return null != o
            ? o
            : r
            ? Yt().isShadowRoot(n)
              ? this.findTestabilityInTree(t, n.host, !0)
              : this.findTestabilityInTree(t, n.parentElement, !0)
            : null;
        }
      }
      let Wx = (() => {
        class e {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Ks = new U("EventManagerPlugins");
      let Ys = (() => {
        class e {
          constructor(n, r) {
            (this._zone = r),
              (this._eventNameToPlugin = new Map()),
              n.forEach((o) => (o.manager = this)),
              (this._plugins = n.slice().reverse());
          }
          addEventListener(n, r, o) {
            return this._findPluginFor(r).addEventListener(n, r, o);
          }
          addGlobalEventListener(n, r, o) {
            return this._findPluginFor(r).addGlobalEventListener(n, r, o);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(n) {
            const r = this._eventNameToPlugin.get(n);
            if (r) return r;
            const o = this._plugins;
            for (let i = 0; i < o.length; i++) {
              const s = o[i];
              if (s.supports(n)) return this._eventNameToPlugin.set(n, s), s;
            }
            throw new Error(`No event manager plugin found for event ${n}`);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(Ks), A(ke));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Sv {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, n, r) {
          const o = Yt().getGlobalEventTarget(this._doc, t);
          if (!o)
            throw new Error(`Unsupported event target ${o} for event ${n}`);
          return this.addEventListener(o, n, r);
        }
      }
      let Iv = (() => {
          class e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(n) {
              const r = new Set();
              n.forEach((o) => {
                this._stylesSet.has(o) || (this._stylesSet.add(o), r.add(o));
              }),
                this.onStylesAdded(r);
            }
            onStylesAdded(n) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        fi = (() => {
          class e extends Iv {
            constructor(n) {
              super(),
                (this._doc = n),
                (this._hostNodes = new Map()),
                this._hostNodes.set(n.head, []);
            }
            _addStylesToHost(n, r, o) {
              n.forEach((i) => {
                const s = this._doc.createElement("style");
                (s.textContent = i), o.push(r.appendChild(s));
              });
            }
            addHost(n) {
              const r = [];
              this._addStylesToHost(this._stylesSet, n, r),
                this._hostNodes.set(n, r);
            }
            removeHost(n) {
              const r = this._hostNodes.get(n);
              r && r.forEach(Tv), this._hostNodes.delete(n);
            }
            onStylesAdded(n) {
              this._hostNodes.forEach((r, o) => {
                this._addStylesToHost(n, o, r);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((n) => n.forEach(Tv));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(ct));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function Tv(e) {
        Yt().remove(e);
      }
      const Uc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        $c = /%COMP%/g;
      function Xs(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let o = t[r];
          Array.isArray(o) ? Xs(e, o, n) : ((o = o.replace($c, e)), n.push(o));
        }
        return n;
      }
      function Nv(e) {
        return (t) => {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let Gc = (() => {
        class e {
          constructor(n, r, o) {
            (this.eventManager = n),
              (this.sharedStylesHost = r),
              (this.appId = o),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new zc(n));
          }
          createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;
            switch (r.encapsulation) {
              case jt.Emulated: {
                let o = this.rendererByCompId.get(r.id);
                return (
                  o ||
                    ((o = new Xx(
                      this.eventManager,
                      this.sharedStylesHost,
                      r,
                      this.appId
                    )),
                    this.rendererByCompId.set(r.id, o)),
                  o.applyToHost(n),
                  o
                );
              }
              case 1:
              case jt.ShadowDom:
                return new e1(this.eventManager, this.sharedStylesHost, n, r);
              default:
                if (!this.rendererByCompId.has(r.id)) {
                  const o = Xs(r.id, r.styles, []);
                  this.sharedStylesHost.addStyles(o),
                    this.rendererByCompId.set(r.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(Ys), A(fi), A(ai));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class zc {
        constructor(t) {
          (this.eventManager = t),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(t, n) {
          return n
            ? document.createElementNS(Uc[n] || n, t)
            : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, n) {
          t.appendChild(n);
        }
        insertBefore(t, n, r) {
          t && t.insertBefore(n, r);
        }
        removeChild(t, n) {
          t && t.removeChild(n);
        }
        selectRootElement(t, n) {
          let r = "string" == typeof t ? document.querySelector(t) : t;
          if (!r)
            throw new Error(`The selector "${t}" did not match any elements`);
          return n || (r.textContent = ""), r;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, n, r, o) {
          if (o) {
            n = o + ":" + n;
            const i = Uc[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = Uc[r];
            o ? t.removeAttributeNS(o, n) : t.removeAttribute(`${r}:${n}`);
          } else t.removeAttribute(n);
        }
        addClass(t, n) {
          t.classList.add(n);
        }
        removeClass(t, n) {
          t.classList.remove(n);
        }
        setStyle(t, n, r, o) {
          o & (st.DashCase | st.Important)
            ? t.style.setProperty(n, r, o & st.Important ? "important" : "")
            : (t.style[n] = r);
        }
        removeStyle(t, n, r) {
          r & st.DashCase ? t.style.removeProperty(n) : (t.style[n] = "");
        }
        setProperty(t, n, r) {
          t[n] = r;
        }
        setValue(t, n) {
          t.nodeValue = n;
        }
        listen(t, n, r) {
          return "string" == typeof t
            ? this.eventManager.addGlobalEventListener(t, n, Nv(r))
            : this.eventManager.addEventListener(t, n, Nv(r));
        }
      }
      class Xx extends zc {
        constructor(t, n, r, o) {
          super(t), (this.component = r);
          const i = Xs(o + "-" + r.id, r.styles, []);
          n.addStyles(i),
            (this.contentAttr = (function Jx(e) {
              return "_ngcontent-%COMP%".replace($c, e);
            })(o + "-" + r.id)),
            (this.hostAttr = (function Kx(e) {
              return "_nghost-%COMP%".replace($c, e);
            })(o + "-" + r.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, n) {
          const r = super.createElement(t, n);
          return super.setAttribute(r, this.contentAttr, ""), r;
        }
      }
      class e1 extends zc {
        constructor(t, n, r, o) {
          super(t),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = Xs(o.id, o.styles, []);
          for (let s = 0; s < i.length; s++) {
            const a = document.createElement("style");
            (a.textContent = i[s]), this.shadowRoot.appendChild(a);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, n) {
          return super.appendChild(this.nodeOrShadowRoot(t), n);
        }
        insertBefore(t, n, r) {
          return super.insertBefore(this.nodeOrShadowRoot(t), n, r);
        }
        removeChild(t, n) {
          return super.removeChild(this.nodeOrShadowRoot(t), n);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t))
          );
        }
      }
      let t1 = (() => {
        class e extends Sv {
          constructor(n) {
            super(n);
          }
          supports(n) {
            return !0;
          }
          addEventListener(n, r, o) {
            return (
              n.addEventListener(r, o, !1),
              () => this.removeEventListener(n, r, o)
            );
          }
          removeEventListener(n, r, o) {
            return n.removeEventListener(r, o);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(ct));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Ov = ["alt", "control", "meta", "shift"],
        r1 = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        kv = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        o1 = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let i1 = (() => {
        class e extends Sv {
          constructor(n) {
            super(n);
          }
          supports(n) {
            return null != e.parseEventName(n);
          }
          addEventListener(n, r, o) {
            const i = e.parseEventName(r),
              s = e.eventCallback(i.fullKey, o, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => Yt().onAndCancel(n, i.domEventName, s));
          }
          static parseEventName(n) {
            const r = n.toLowerCase().split("."),
              o = r.shift();
            if (0 === r.length || ("keydown" !== o && "keyup" !== o))
              return null;
            const i = e._normalizeKey(r.pop());
            let s = "";
            if (
              (Ov.forEach((l) => {
                const u = r.indexOf(l);
                u > -1 && (r.splice(u, 1), (s += l + "."));
              }),
              (s += i),
              0 != r.length || 0 === i.length)
            )
              return null;
            const a = {};
            return (a.domEventName = o), (a.fullKey = s), a;
          }
          static getEventFullKey(n) {
            let r = "",
              o = (function s1(e) {
                let t = e.key;
                if (null == t) {
                  if (((t = e.keyIdentifier), null == t)) return "Unidentified";
                  t.startsWith("U+") &&
                    ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                    3 === e.location && kv.hasOwnProperty(t) && (t = kv[t]));
                }
                return r1[t] || t;
              })(n);
            return (
              (o = o.toLowerCase()),
              " " === o ? (o = "space") : "." === o && (o = "dot"),
              Ov.forEach((i) => {
                i != o && o1[i](n) && (r += i + ".");
              }),
              (r += o),
              r
            );
          }
          static eventCallback(n, r, o) {
            return (i) => {
              e.getEventFullKey(i) === n && o.runGuarded(() => r(i));
            };
          }
          static _normalizeKey(n) {
            return "esc" === n ? "escape" : n;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(ct));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const c1 = Gy(dT, "browser", [
          { provide: uc, useValue: "browser" },
          {
            provide: Py,
            useValue: function a1() {
              jc.makeCurrent(), Hc.init();
            },
            multi: !0,
          },
          {
            provide: ct,
            useFactory: function u1() {
              return (
                (function Cb(e) {
                  tl = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        d1 = [
          { provide: gu, useValue: "root" },
          {
            provide: Ho,
            useFactory: function l1() {
              return new Ho();
            },
            deps: [],
          },
          { provide: Ks, useClass: t1, multi: !0, deps: [ct, ke, uc] },
          { provide: Ks, useClass: i1, multi: !0, deps: [ct] },
          { provide: Gc, useClass: Gc, deps: [Ys, fi, ai] },
          { provide: Jm, useExisting: Gc },
          { provide: Iv, useExisting: fi },
          { provide: fi, useClass: fi, deps: [ct] },
          { provide: hc, useClass: hc, deps: [ke] },
          { provide: Ys, useClass: Ys, deps: [Ks, ke] },
          { provide: Mv, useClass: Wx, deps: [] },
        ];
      let f1 = (() => {
        class e {
          constructor(n) {
            if (n)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(n) {
            return {
              ngModule: e,
              providers: [
                { provide: ai, useValue: n.appId },
                { provide: Av, useExisting: ai },
                qx,
              ],
            };
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(e, 12));
          }),
          (e.ɵmod = nt({ type: e })),
          (e.ɵinj = Ke({ providers: d1, imports: [kx, fT] })),
          e
        );
      })();
      function B(...e) {
        return Fe(e, yo(e));
      }
      function ro(e, t) {
        return ie(t) ? xe(e, t, 1) : xe(e, 1);
      }
      function rr(e, t) {
        return Re((n, r) => {
          let o = 0;
          n.subscribe(Te(r, (i) => e.call(t, i, o++) && r.next(i)));
        });
      }
      "undefined" != typeof window && window;
      class Lv {}
      class Bv {}
      class yn {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  "string" == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split("\n").forEach((n) => {
                            const r = n.indexOf(":");
                            if (r > 0) {
                              const o = n.slice(0, r),
                                i = o.toLowerCase(),
                                s = n.slice(r + 1).trim();
                              this.maybeSetNormalizedName(o, i),
                                this.headers.has(i)
                                  ? this.headers.get(i).push(s)
                                  : this.headers.set(i, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach((n) => {
                            let r = t[n];
                            const o = n.toLowerCase();
                            "string" == typeof r && (r = [r]),
                              r.length > 0 &&
                                (this.headers.set(o, r),
                                this.maybeSetNormalizedName(n, o));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const n = this.headers.get(t.toLowerCase());
          return n && n.length > 0 ? n[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, n) {
          return this.clone({ name: t, value: n, op: "a" });
        }
        set(t, n) {
          return this.clone({ name: t, value: n, op: "s" });
        }
        delete(t, n) {
          return this.clone({ name: t, value: n, op: "d" });
        }
        maybeSetNormalizedName(t, n) {
          this.normalizedNames.has(n) || this.normalizedNames.set(n, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof yn
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
              (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach((n) => {
              this.headers.set(n, t.headers.get(n)),
                this.normalizedNames.set(n, t.normalizedNames.get(n));
            });
        }
        clone(t) {
          const n = new yn();
          return (
            (n.lazyInit =
              this.lazyInit && this.lazyInit instanceof yn
                ? this.lazyInit
                : this),
            (n.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            n
          );
        }
        applyUpdate(t) {
          const n = t.name.toLowerCase();
          switch (t.op) {
            case "a":
            case "s":
              let r = t.value;
              if (("string" == typeof r && (r = [r]), 0 === r.length)) return;
              this.maybeSetNormalizedName(t.name, n);
              const o = ("a" === t.op ? this.headers.get(n) : void 0) || [];
              o.push(...r), this.headers.set(n, o);
              break;
            case "d":
              const i = t.value;
              if (i) {
                let s = this.headers.get(n);
                if (!s) return;
                (s = s.filter((a) => -1 === i.indexOf(a))),
                  0 === s.length
                    ? (this.headers.delete(n), this.normalizedNames.delete(n))
                    : this.headers.set(n, s);
              } else this.headers.delete(n), this.normalizedNames.delete(n);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((n) =>
              t(this.normalizedNames.get(n), this.headers.get(n))
            );
        }
      }
      class w1 {
        encodeKey(t) {
          return jv(t);
        }
        encodeValue(t) {
          return jv(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      const M1 = /%(\d[a-f0-9])/gi,
        A1 = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "2B": "+",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function jv(e) {
        return encodeURIComponent(e).replace(M1, (t, n) => {
          var r;
          return null !== (r = A1[n]) && void 0 !== r ? r : t;
        });
      }
      function Hv(e) {
        return `${e}`;
      }
      class Rn {
        constructor(t = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = t.encoder || new w1()),
            t.fromString)
          ) {
            if (t.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function E1(e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((o) => {
                      const i = o.indexOf("="),
                        [s, a] =
                          -1 == i
                            ? [t.decodeKey(o), ""]
                            : [
                                t.decodeKey(o.slice(0, i)),
                                t.decodeValue(o.slice(i + 1)),
                              ],
                        l = n.get(s) || [];
                      l.push(a), n.set(s, l);
                    }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach((n) => {
                  const r = t.fromObject[n];
                  this.map.set(n, Array.isArray(r) ? r : [r]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const n = this.map.get(t);
          return n ? n[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, n) {
          return this.clone({ param: t, value: n, op: "a" });
        }
        appendAll(t) {
          const n = [];
          return (
            Object.keys(t).forEach((r) => {
              const o = t[r];
              Array.isArray(o)
                ? o.forEach((i) => {
                    n.push({ param: r, value: i, op: "a" });
                  })
                : n.push({ param: r, value: o, op: "a" });
            }),
            this.clone(n)
          );
        }
        set(t, n) {
          return this.clone({ param: t, value: n, op: "s" });
        }
        delete(t, n) {
          return this.clone({ param: t, value: n, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((t) => {
                const n = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map((r) => n + "=" + this.encoder.encodeValue(r))
                  .join("&");
              })
              .filter((t) => "" !== t)
              .join("&")
          );
        }
        clone(t) {
          const n = new Rn({ encoder: this.encoder });
          return (
            (n.cloneFrom = this.cloneFrom || this),
            (n.updates = (this.updates || []).concat(t)),
            n
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach((t) => {
                switch (t.op) {
                  case "a":
                  case "s":
                    const n =
                      ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                    n.push(Hv(t.value)), this.map.set(t.param, n);
                    break;
                  case "d":
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let r = this.map.get(t.param) || [];
                      const o = r.indexOf(Hv(t.value));
                      -1 !== o && r.splice(o, 1),
                        r.length > 0
                          ? this.map.set(t.param, r)
                          : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class S1 {
        constructor() {
          this.map = new Map();
        }
        set(t, n) {
          return this.map.set(t, n), this;
        }
        get(t) {
          return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
          );
        }
        delete(t) {
          return this.map.delete(t), this;
        }
        has(t) {
          return this.map.has(t);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Uv(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function $v(e) {
        return "undefined" != typeof Blob && e instanceof Blob;
      }
      function Gv(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }
      class hi {
        constructor(t, n, r, o) {
          let i;
          if (
            ((this.url = n),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = t.toUpperCase()),
            (function I1(e) {
              switch (e) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || o
              ? ((this.body = void 0 !== r ? r : null), (i = o))
              : (i = r),
            i &&
              ((this.reportProgress = !!i.reportProgress),
              (this.withCredentials = !!i.withCredentials),
              i.responseType && (this.responseType = i.responseType),
              i.headers && (this.headers = i.headers),
              i.context && (this.context = i.context),
              i.params && (this.params = i.params)),
            this.headers || (this.headers = new yn()),
            this.context || (this.context = new S1()),
            this.params)
          ) {
            const s = this.params.toString();
            if (0 === s.length) this.urlWithParams = n;
            else {
              const a = n.indexOf("?");
              this.urlWithParams =
                n + (-1 === a ? "?" : a < n.length - 1 ? "&" : "") + s;
            }
          } else (this.params = new Rn()), (this.urlWithParams = n);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Uv(this.body) ||
              $v(this.body) ||
              Gv(this.body) ||
              (function T1(e) {
                return (
                  "undefined" != typeof URLSearchParams &&
                  e instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Rn
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Gv(this.body)
            ? null
            : $v(this.body)
            ? this.body.type || null
            : Uv(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Rn
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(t = {}) {
          var n;
          const r = t.method || this.method,
            o = t.url || this.url,
            i = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            a =
              void 0 !== t.withCredentials
                ? t.withCredentials
                : this.withCredentials,
            l =
              void 0 !== t.reportProgress
                ? t.reportProgress
                : this.reportProgress;
          let u = t.headers || this.headers,
            c = t.params || this.params;
          const d = null !== (n = t.context) && void 0 !== n ? n : this.context;
          return (
            void 0 !== t.setHeaders &&
              (u = Object.keys(t.setHeaders).reduce(
                (f, h) => f.set(h, t.setHeaders[h]),
                u
              )),
            t.setParams &&
              (c = Object.keys(t.setParams).reduce(
                (f, h) => f.set(h, t.setParams[h]),
                c
              )),
            new hi(r, o, s, {
              params: c,
              headers: u,
              context: d,
              reportProgress: l,
              responseType: i,
              withCredentials: a,
            })
          );
        }
      }
      var Ee = (() => (
        ((Ee = Ee || {})[(Ee.Sent = 0)] = "Sent"),
        (Ee[(Ee.UploadProgress = 1)] = "UploadProgress"),
        (Ee[(Ee.ResponseHeader = 2)] = "ResponseHeader"),
        (Ee[(Ee.DownloadProgress = 3)] = "DownloadProgress"),
        (Ee[(Ee.Response = 4)] = "Response"),
        (Ee[(Ee.User = 5)] = "User"),
        Ee
      ))();
      class Wc {
        constructor(t, n = 200, r = "OK") {
          (this.headers = t.headers || new yn()),
            (this.status = void 0 !== t.status ? t.status : n),
            (this.statusText = t.statusText || r),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Qc extends Wc {
        constructor(t = {}) {
          super(t), (this.type = Ee.ResponseHeader);
        }
        clone(t = {}) {
          return new Qc({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class ea extends Wc {
        constructor(t = {}) {
          super(t),
            (this.type = Ee.Response),
            (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new ea({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
          });
        }
      }
      class oo extends Wc {
        constructor(t) {
          super(t, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || "(unknown url)"}`
                : `Http failure response for ${t.url || "(unknown url)"}: ${
                    t.status
                  } ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function Zc(e, t) {
        return {
          body: t,
          headers: e.headers,
          context: e.context,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      let ta = (() => {
        class e {
          constructor(n) {
            this.handler = n;
          }
          request(n, r, o = {}) {
            let i;
            if (n instanceof hi) i = n;
            else {
              let l, u;
              (l = o.headers instanceof yn ? o.headers : new yn(o.headers)),
                o.params &&
                  (u =
                    o.params instanceof Rn
                      ? o.params
                      : new Rn({ fromObject: o.params })),
                (i = new hi(n, r, void 0 !== o.body ? o.body : null, {
                  headers: l,
                  context: o.context,
                  params: u,
                  reportProgress: o.reportProgress,
                  responseType: o.responseType || "json",
                  withCredentials: o.withCredentials,
                }));
            }
            const s = B(i).pipe(ro((l) => this.handler.handle(l)));
            if (n instanceof hi || "events" === o.observe) return s;
            const a = s.pipe(rr((l) => l instanceof ea));
            switch (o.observe || "body") {
              case "body":
                switch (i.responseType) {
                  case "arraybuffer":
                    return a.pipe(
                      Y((l) => {
                        if (null !== l.body && !(l.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return l.body;
                      })
                    );
                  case "blob":
                    return a.pipe(
                      Y((l) => {
                        if (null !== l.body && !(l.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return l.body;
                      })
                    );
                  case "text":
                    return a.pipe(
                      Y((l) => {
                        if (null !== l.body && "string" != typeof l.body)
                          throw new Error("Response is not a string.");
                        return l.body;
                      })
                    );
                  default:
                    return a.pipe(Y((l) => l.body));
                }
              case "response":
                return a;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${o.observe}}`
                );
            }
          }
          delete(n, r = {}) {
            return this.request("DELETE", n, r);
          }
          get(n, r = {}) {
            return this.request("GET", n, r);
          }
          head(n, r = {}) {
            return this.request("HEAD", n, r);
          }
          jsonp(n, r) {
            return this.request("JSONP", n, {
              params: new Rn().append(r, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(n, r = {}) {
            return this.request("OPTIONS", n, r);
          }
          patch(n, r, o = {}) {
            return this.request("PATCH", n, Zc(o, r));
          }
          post(n, r, o = {}) {
            return this.request("POST", n, Zc(o, r));
          }
          put(n, r, o = {}) {
            return this.request("PUT", n, Zc(o, r));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(Lv));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class zv {
        constructor(t, n) {
          (this.next = t), (this.interceptor = n);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const Jc = new U("HTTP_INTERCEPTORS");
      let x1 = (() => {
        class e {
          intercept(n, r) {
            return r.handle(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const F1 = /^\)\]\}',?\n/;
      let qv = (() => {
        class e {
          constructor(n) {
            this.xhrFactory = n;
          }
          handle(n) {
            if ("JSONP" === n.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new ye((r) => {
              const o = this.xhrFactory.build();
              if (
                (o.open(n.method, n.urlWithParams),
                n.withCredentials && (o.withCredentials = !0),
                n.headers.forEach((h, p) => o.setRequestHeader(h, p.join(","))),
                n.headers.has("Accept") ||
                  o.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !n.headers.has("Content-Type"))
              ) {
                const h = n.detectContentTypeHeader();
                null !== h && o.setRequestHeader("Content-Type", h);
              }
              if (n.responseType) {
                const h = n.responseType.toLowerCase();
                o.responseType = "json" !== h ? h : "text";
              }
              const i = n.serializeBody();
              let s = null;
              const a = () => {
                  if (null !== s) return s;
                  const h = o.statusText || "OK",
                    p = new yn(o.getAllResponseHeaders()),
                    m =
                      (function N1(e) {
                        return "responseURL" in e && e.responseURL
                          ? e.responseURL
                          : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                          ? e.getResponseHeader("X-Request-URL")
                          : null;
                      })(o) || n.url;
                  return (
                    (s = new Qc({
                      headers: p,
                      status: o.status,
                      statusText: h,
                      url: m,
                    })),
                    s
                  );
                },
                l = () => {
                  let { headers: h, status: p, statusText: m, url: b } = a(),
                    C = null;
                  204 !== p &&
                    (C = void 0 === o.response ? o.responseText : o.response),
                    0 === p && (p = C ? 200 : 0);
                  let g = p >= 200 && p < 300;
                  if ("json" === n.responseType && "string" == typeof C) {
                    const S = C;
                    C = C.replace(F1, "");
                    try {
                      C = "" !== C ? JSON.parse(C) : null;
                    } catch (L) {
                      (C = S), g && ((g = !1), (C = { error: L, text: C }));
                    }
                  }
                  g
                    ? (r.next(
                        new ea({
                          body: C,
                          headers: h,
                          status: p,
                          statusText: m,
                          url: b || void 0,
                        })
                      ),
                      r.complete())
                    : r.error(
                        new oo({
                          error: C,
                          headers: h,
                          status: p,
                          statusText: m,
                          url: b || void 0,
                        })
                      );
                },
                u = (h) => {
                  const { url: p } = a(),
                    m = new oo({
                      error: h,
                      status: o.status || 0,
                      statusText: o.statusText || "Unknown Error",
                      url: p || void 0,
                    });
                  r.error(m);
                };
              let c = !1;
              const d = (h) => {
                  c || (r.next(a()), (c = !0));
                  let p = { type: Ee.DownloadProgress, loaded: h.loaded };
                  h.lengthComputable && (p.total = h.total),
                    "text" === n.responseType &&
                      !!o.responseText &&
                      (p.partialText = o.responseText),
                    r.next(p);
                },
                f = (h) => {
                  let p = { type: Ee.UploadProgress, loaded: h.loaded };
                  h.lengthComputable && (p.total = h.total), r.next(p);
                };
              return (
                o.addEventListener("load", l),
                o.addEventListener("error", u),
                o.addEventListener("timeout", u),
                o.addEventListener("abort", u),
                n.reportProgress &&
                  (o.addEventListener("progress", d),
                  null !== i &&
                    o.upload &&
                    o.upload.addEventListener("progress", f)),
                o.send(i),
                r.next({ type: Ee.Sent }),
                () => {
                  o.removeEventListener("error", u),
                    o.removeEventListener("abort", u),
                    o.removeEventListener("load", l),
                    o.removeEventListener("timeout", u),
                    n.reportProgress &&
                      (o.removeEventListener("progress", d),
                      null !== i &&
                        o.upload &&
                        o.upload.removeEventListener("progress", f)),
                    o.readyState !== o.DONE && o.abort();
                }
              );
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(Mv));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Kc = new U("XSRF_COOKIE_NAME"),
        Yc = new U("XSRF_HEADER_NAME");
      class Wv {}
      let R1 = (() => {
          class e {
            constructor(n, r, o) {
              (this.doc = n),
                (this.platform = r),
                (this.cookieName = o),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const n = this.doc.cookie || "";
              return (
                n !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = vv(n, this.cookieName)),
                  (this.lastCookieString = n)),
                this.lastToken
              );
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(ct), A(uc), A(Kc));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Xc = (() => {
          class e {
            constructor(n, r) {
              (this.tokenService = n), (this.headerName = r);
            }
            intercept(n, r) {
              const o = n.url.toLowerCase();
              if (
                "GET" === n.method ||
                "HEAD" === n.method ||
                o.startsWith("http://") ||
                o.startsWith("https://")
              )
                return r.handle(n);
              const i = this.tokenService.getToken();
              return (
                null !== i &&
                  !n.headers.has(this.headerName) &&
                  (n = n.clone({ headers: n.headers.set(this.headerName, i) })),
                r.handle(n)
              );
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(Wv), A(Yc));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        O1 = (() => {
          class e {
            constructor(n, r) {
              (this.backend = n), (this.injector = r), (this.chain = null);
            }
            handle(n) {
              if (null === this.chain) {
                const r = this.injector.get(Jc, []);
                this.chain = r.reduceRight(
                  (o, i) => new zv(o, i),
                  this.backend
                );
              }
              return this.chain.handle(n);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(Bv), A(We));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        k1 = (() => {
          class e {
            static disable() {
              return {
                ngModule: e,
                providers: [{ provide: Xc, useClass: x1 }],
              };
            }
            static withOptions(n = {}) {
              return {
                ngModule: e,
                providers: [
                  n.cookieName ? { provide: Kc, useValue: n.cookieName } : [],
                  n.headerName ? { provide: Yc, useValue: n.headerName } : [],
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({
              providers: [
                Xc,
                { provide: Jc, useExisting: Xc, multi: !0 },
                { provide: Wv, useClass: R1 },
                { provide: Kc, useValue: "XSRF-TOKEN" },
                { provide: Yc, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            e
          );
        })(),
        P1 = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({
              providers: [
                ta,
                { provide: Lv, useClass: O1 },
                qv,
                { provide: Bv, useExisting: qv },
              ],
              imports: [
                [
                  k1.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            e
          );
        })();
      const { isArray: V1 } = Array,
        { getPrototypeOf: L1, prototype: B1, keys: j1 } = Object;
      function Qv(e) {
        if (1 === e.length) {
          const t = e[0];
          if (V1(t)) return { args: t, keys: null };
          if (
            (function H1(e) {
              return e && "object" == typeof e && L1(e) === B1;
            })(t)
          ) {
            const n = j1(t);
            return { args: n.map((r) => t[r]), keys: n };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: U1 } = Array;
      function Zv(e) {
        return Y((t) =>
          (function $1(e, t) {
            return U1(t) ? e(...t) : e(t);
          })(e, t)
        );
      }
      function Jv(e, t) {
        return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
      }
      let Kv = (() => {
          class e {
            constructor(n, r) {
              (this._renderer = n),
                (this._elementRef = r),
                (this.onChange = (o) => {}),
                (this.onTouched = () => {});
            }
            setProperty(n, r) {
              this._renderer.setProperty(this._elementRef.nativeElement, n, r);
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            registerOnChange(n) {
              this.onChange = n;
            }
            setDisabledState(n) {
              this.setProperty("disabled", n);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(fn), v(ut));
            }),
            (e.ɵdir = F({ type: e })),
            e
          );
        })(),
        or = (() => {
          class e extends Kv {}
          return (
            (e.ɵfac = (function () {
              let t;
              return function (r) {
                return (t || (t = Be(e)))(r || e);
              };
            })()),
            (e.ɵdir = F({ type: e, features: [ee] })),
            e
          );
        })();
      const Xt = new U("NgValueAccessor"),
        q1 = { provide: Xt, useExisting: se(() => On), multi: !0 },
        Q1 = new U("CompositionEventMode");
      let On = (() => {
        class e extends Kv {
          constructor(n, r, o) {
            super(n, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function W1() {
                  const e = Yt() ? Yt().getUserAgent() : "";
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(n) {
            this.setProperty("value", null == n ? "" : n);
          }
          _handleInput(n) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(n);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(n) {
            (this._composing = !1), this._compositionMode && this.onChange(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(fn), v(ut), v(Q1, 8));
          }),
          (e.ɵdir = F({
            type: e,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (n, r) {
              1 & n &&
                V("input", function (i) {
                  return r._handleInput(i.target.value);
                })("blur", function () {
                  return r.onTouched();
                })("compositionstart", function () {
                  return r._compositionStart();
                })("compositionend", function (i) {
                  return r._compositionEnd(i.target.value);
                });
            },
            features: [ce([q1]), ee],
          })),
          e
        );
      })();
      const Ue = new U("NgValidators"),
        Pn = new U("NgAsyncValidators");
      function n_(e) {
        return (function kn(e) {
          return null == e || 0 === e.length;
        })(e.value)
          ? { required: !0 }
          : null;
      }
      function na(e) {
        return null;
      }
      function l_(e) {
        return null != e;
      }
      function u_(e) {
        const t = Zo(e) ? Fe(e) : e;
        return xu(t), t;
      }
      function c_(e) {
        let t = {};
        return (
          e.forEach((n) => {
            t = null != n ? Object.assign(Object.assign({}, t), n) : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function d_(e, t) {
        return t.map((n) => n(e));
      }
      function f_(e) {
        return e.map((t) =>
          (function J1(e) {
            return !e.validate;
          })(t)
            ? t
            : (n) => t.validate(n)
        );
      }
      function ed(e) {
        return null != e
          ? (function h_(e) {
              if (!e) return null;
              const t = e.filter(l_);
              return 0 == t.length
                ? null
                : function (n) {
                    return c_(d_(n, t));
                  };
            })(f_(e))
          : null;
      }
      function td(e) {
        return null != e
          ? (function p_(e) {
              if (!e) return null;
              const t = e.filter(l_);
              return 0 == t.length
                ? null
                : function (n) {
                    return (function G1(...e) {
                      const t = _f(e),
                        { args: n, keys: r } = Qv(e),
                        o = new ye((i) => {
                          const { length: s } = n;
                          if (!s) return void i.complete();
                          const a = new Array(s);
                          let l = s,
                            u = s;
                          for (let c = 0; c < s; c++) {
                            let d = !1;
                            Bt(n[c]).subscribe(
                              Te(
                                i,
                                (f) => {
                                  d || ((d = !0), u--), (a[c] = f);
                                },
                                () => l--,
                                void 0,
                                () => {
                                  (!l || !d) &&
                                    (u || i.next(r ? Jv(r, a) : a),
                                    i.complete());
                                }
                              )
                            );
                          }
                        });
                      return t ? o.pipe(Zv(t)) : o;
                    })(d_(n, t).map(u_)).pipe(Y(c_));
                  };
            })(f_(e))
          : null;
      }
      function g_(e, t) {
        return null === e ? [t] : Array.isArray(e) ? [...e, t] : [e, t];
      }
      function nd(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function ra(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      function v_(e, t) {
        const n = nd(t);
        return (
          nd(e).forEach((o) => {
            ra(n, o) || n.push(o);
          }),
          n
        );
      }
      function __(e, t) {
        return nd(t).filter((n) => !ra(e, n));
      }
      class D_ {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(t) {
          (this._rawValidators = t || []),
            (this._composedValidatorFn = ed(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = td(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(t) {
          this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((t) => t()),
            (this._onDestroyCallbacks = []);
        }
        reset(t) {
          this.control && this.control.reset(t);
        }
        hasError(t, n) {
          return !!this.control && this.control.hasError(t, n);
        }
        getError(t, n) {
          return this.control ? this.control.getError(t, n) : null;
        }
      }
      class Vn extends D_ {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Je extends D_ {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      let io = (() => {
        class e extends class C_ {
          constructor(t) {
            this._cd = t;
          }
          is(t) {
            var n, r, o;
            return "submitted" === t
              ? !!(null === (n = this._cd) || void 0 === n
                  ? void 0
                  : n.submitted)
              : !!(null ===
                  (o =
                    null === (r = this._cd) || void 0 === r
                      ? void 0
                      : r.control) || void 0 === o
                  ? void 0
                  : o[t]);
          }
        } {
          constructor(n) {
            super(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(Vn, 2));
          }),
          (e.ɵdir = F({
            type: e,
            selectors: [
              ["", "formControlName", ""],
              ["", "ngModel", ""],
              ["", "formControl", ""],
            ],
            hostVars: 14,
            hostBindings: function (n, r) {
              2 & n &&
                Es("ng-untouched", r.is("untouched"))(
                  "ng-touched",
                  r.is("touched")
                )("ng-pristine", r.is("pristine"))("ng-dirty", r.is("dirty"))(
                  "ng-valid",
                  r.is("valid")
                )("ng-invalid", r.is("invalid"))("ng-pending", r.is("pending"));
            },
            features: [ee],
          })),
          e
        );
      })();
      function pi(e, t) {
        (function id(e, t) {
          const n = (function m_(e) {
            return e._rawValidators;
          })(e);
          null !== t.validator
            ? e.setValidators(g_(n, t.validator))
            : "function" == typeof n && e.setValidators([n]);
          const r = (function y_(e) {
            return e._rawAsyncValidators;
          })(e);
          null !== t.asyncValidator
            ? e.setAsyncValidators(g_(r, t.asyncValidator))
            : "function" == typeof r && e.setAsyncValidators([r]);
          const o = () => e.updateValueAndValidity();
          aa(t._rawValidators, o), aa(t._rawAsyncValidators, o);
        })(e, t),
          t.valueAccessor.writeValue(e.value),
          (function iF(e, t) {
            t.valueAccessor.registerOnChange((n) => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                "change" === e.updateOn && w_(e, t);
            });
          })(e, t),
          (function aF(e, t) {
            const n = (r, o) => {
              t.valueAccessor.writeValue(r), o && t.viewToModelUpdate(r);
            };
            e.registerOnChange(n),
              t._registerOnDestroy(() => {
                e._unregisterOnChange(n);
              });
          })(e, t),
          (function sF(e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                "blur" === e.updateOn && e._pendingChange && w_(e, t),
                "submit" !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          (function oF(e, t) {
            if (t.valueAccessor.setDisabledState) {
              const n = (r) => {
                t.valueAccessor.setDisabledState(r);
              };
              e.registerOnDisabledChange(n),
                t._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(n);
                });
            }
          })(e, t);
      }
      function aa(e, t) {
        e.forEach((n) => {
          n.registerOnValidatorChange && n.registerOnValidatorChange(t);
        });
      }
      function w_(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function ld(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const gi = "VALID",
        ua = "INVALID",
        so = "PENDING",
        mi = "DISABLED";
      function cd(e) {
        return (ca(e) ? e.validators : e) || null;
      }
      function S_(e) {
        return Array.isArray(e) ? ed(e) : e || null;
      }
      function dd(e, t) {
        return (ca(t) ? t.asyncValidators : e) || null;
      }
      function I_(e) {
        return Array.isArray(e) ? td(e) : e || null;
      }
      function ca(e) {
        return null != e && !Array.isArray(e) && "object" == typeof e;
      }
      const fd = (e) => e instanceof pd;
      function x_(e) {
        return ((e) => e instanceof R_)(e) ? e.value : e.getRawValue();
      }
      function F_(e, t) {
        const n = fd(e),
          r = e.controls;
        if (!(n ? Object.keys(r) : r).length) throw new Z(1e3, "");
        if (!r[t]) throw new Z(1001, "");
      }
      function N_(e, t) {
        fd(e),
          e._forEachChild((r, o) => {
            if (void 0 === t[o]) throw new Z(1002, "");
          });
      }
      class hd {
        constructor(t, n) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            (this._rawValidators = t),
            (this._rawAsyncValidators = n),
            (this._composedValidatorFn = S_(this._rawValidators)),
            (this._composedAsyncValidatorFn = I_(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === gi;
        }
        get invalid() {
          return this.status === ua;
        }
        get pending() {
          return this.status == so;
        }
        get disabled() {
          return this.status === mi;
        }
        get enabled() {
          return this.status !== mi;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          (this._rawValidators = t), (this._composedValidatorFn = S_(t));
        }
        setAsyncValidators(t) {
          (this._rawAsyncValidators = t),
            (this._composedAsyncValidatorFn = I_(t));
        }
        addValidators(t) {
          this.setValidators(v_(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(v_(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(__(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(__(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return ra(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return ra(this._rawAsyncValidators, t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((n) => {
              n.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((n) => {
              n.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = so),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = mi),
            (this.errors = null),
            this._forEachChild((r) => {
              r.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: n })
            ),
            this._onDisabledChange.forEach((r) => r(!0));
        }
        enable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = gi),
            this._forEachChild((r) => {
              r.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              Object.assign(Object.assign({}, t), { skipPristineCheck: n })
            ),
            this._onDisabledChange.forEach((r) => r(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === gi || this.status === so) &&
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((n) => n._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? mi : gi;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = so), (this._hasOwnPendingAsyncValidator = !0);
            const n = u_(this.asyncValidator(this));
            this._asyncValidationSubscription = n.subscribe((r) => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(r, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, n = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== n.emitEvent);
        }
        get(t) {
          return (function dF(e, t, n) {
            if (
              null == t ||
              (Array.isArray(t) || (t = t.split(n)),
              Array.isArray(t) && 0 === t.length)
            )
              return null;
            let r = e;
            return (
              t.forEach((o) => {
                r = fd(r)
                  ? r.controls.hasOwnProperty(o)
                    ? r.controls[o]
                    : null
                  : (((e) => e instanceof hF)(r) && r.at(o)) || null;
              }),
              r
            );
          })(this, t, ".");
        }
        getError(t, n) {
          const r = n ? this.get(n) : this;
          return r && r.errors ? r.errors[t] : null;
        }
        hasError(t, n) {
          return !!this.getError(t, n);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new ge()), (this.statusChanges = new ge());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? mi
            : this.errors
            ? ua
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(so)
            ? so
            : this._anyControlsHaveStatus(ua)
            ? ua
            : gi;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls((n) => n.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return (
            "object" == typeof t &&
            null !== t &&
            2 === Object.keys(t).length &&
            "value" in t &&
            "disabled" in t
          );
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          ca(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class R_ extends hd {
        constructor(t = null, n, r) {
          super(cd(n), dd(r, n)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(t),
            this._setUpdateStrategy(n),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            ca(n) &&
              n.initialValueIsDefault &&
              (this.defaultValue = this._isBoxedValue(t) ? t.value : t);
        }
        setValue(t, n = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== n.emitModelToViewChange &&
              this._onChange.forEach((r) =>
                r(this.value, !1 !== n.emitViewToModelChange)
              ),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          this.setValue(t, n);
        }
        reset(t = this.defaultValue, n = {}) {
          this._applyFormState(t),
            this.markAsPristine(n),
            this.markAsUntouched(n),
            this.setValue(this.value, n),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          ld(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          ld(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class pd extends hd {
        constructor(t, n, r) {
          super(cd(n), dd(r, n)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(n),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(t, n) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = n),
              n.setParent(this),
              n._registerOnCollectionChange(this._onCollectionChange),
              n);
        }
        addControl(t, n, r = {}) {
          this.registerControl(t, n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(t, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        setControl(t, n, r = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            n && this.registerControl(t, n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, n = {}) {
          N_(this, t),
            Object.keys(t).forEach((r) => {
              F_(this, r),
                this.controls[r].setValue(t[r], {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          null != t &&
            (Object.keys(t).forEach((r) => {
              this.controls[r] &&
                this.controls[r].patchValue(t[r], {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n));
        }
        reset(t = {}, n = {}) {
          this._forEachChild((r, o) => {
            r.reset(t[o], { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._updatePristine(n),
            this._updateTouched(n),
            this.updateValueAndValidity(n);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, n, r) => ((t[r] = x_(n)), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (n, r) => !!r._syncPendingControls() || n
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((n) => {
            const r = this.controls[n];
            r && t(r, n);
          });
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const n of Object.keys(this.controls)) {
            const r = this.controls[n];
            if (this.contains(n) && t(r)) return !0;
          }
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, n, r) => ((n.enabled || this.disabled) && (t[r] = n.value), t)
          );
        }
        _reduceChildren(t, n) {
          let r = t;
          return (
            this._forEachChild((o, i) => {
              r = n(r, o, i);
            }),
            r
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
      }
      class hF extends hd {
        constructor(t, n, r) {
          super(cd(n), dd(r, n)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(n),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(t) {
          return this.controls[t];
        }
        push(t, n = {}) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        insert(t, n, r = {}) {
          this.controls.splice(t, 0, n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent });
        }
        removeAt(t, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity({ emitEvent: n.emitEvent });
        }
        setControl(t, n, r = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            n && (this.controls.splice(t, 0, n), this._registerControl(n)),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, n = {}) {
          N_(this, t),
            t.forEach((r, o) => {
              F_(this, o),
                this.at(o).setValue(r, {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          null != t &&
            (t.forEach((r, o) => {
              this.at(o) &&
                this.at(o).patchValue(r, {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n));
        }
        reset(t = [], n = {}) {
          this._forEachChild((r, o) => {
            r.reset(t[o], { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._updatePristine(n),
            this._updateTouched(n),
            this.updateValueAndValidity(n);
        }
        getRawValue() {
          return this.controls.map((t) => x_(t));
        }
        clear(t = {}) {
          this.controls.length < 1 ||
            (this._forEachChild((n) => n._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (n, r) => !!r._syncPendingControls() || n,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          this.controls.forEach((n, r) => {
            t(n, r);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter((t) => t.enabled || this.disabled)
            .map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((n) => n.enabled && t(n));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const mF = { provide: Vn, useExisting: se(() => ir) },
        P_ = (() => Promise.resolve(null))();
      let ir = (() => {
          class e extends Vn {
            constructor(n, r, o, i, s) {
              super(),
                (this._changeDetectorRef = s),
                (this.control = new R_()),
                (this._registered = !1),
                (this.update = new ge()),
                (this._parent = n),
                this._setValidators(r),
                this._setAsyncValidators(o),
                (this.valueAccessor = (function ad(e, t) {
                  if (!t) return null;
                  let n, r, o;
                  return (
                    Array.isArray(t),
                    t.forEach((i) => {
                      i.constructor === On
                        ? (n = i)
                        : (function cF(e) {
                            return Object.getPrototypeOf(e.constructor) === or;
                          })(i)
                        ? (r = i)
                        : (o = i);
                    }),
                    o || r || n || null
                  );
                })(0, i));
            }
            ngOnChanges(n) {
              if ((this._checkForErrors(), !this._registered || "name" in n)) {
                if (
                  this._registered &&
                  (this._checkName(), this.formDirective)
                ) {
                  const r = n.name.previousValue;
                  this.formDirective.removeControl({
                    name: r,
                    path: this._getPath(r),
                  });
                }
                this._setUpControl();
              }
              "isDisabled" in n && this._updateDisabled(n),
                (function sd(e, t) {
                  if (!e.hasOwnProperty("model")) return !1;
                  const n = e.model;
                  return !!n.isFirstChange() || !Object.is(t, n.currentValue);
                })(n, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
              return this._getPath(this.name);
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(n) {
              (this.viewModel = n), this.update.emit(n);
            }
            _setUpControl() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }
            _setUpdateStrategy() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }
            _setUpStandalone() {
              pi(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }
            _checkParentType() {}
            _checkName() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone();
            }
            _updateValue(n) {
              P_.then(() => {
                var r;
                this.control.setValue(n, { emitViewToModelChange: !1 }),
                  null === (r = this._changeDetectorRef) ||
                    void 0 === r ||
                    r.markForCheck();
              });
            }
            _updateDisabled(n) {
              const r = n.isDisabled.currentValue,
                o = "" === r || (r && "false" !== r);
              P_.then(() => {
                var i;
                o && !this.control.disabled
                  ? this.control.disable()
                  : !o && this.control.disabled && this.control.enable(),
                  null === (i = this._changeDetectorRef) ||
                    void 0 === i ||
                    i.markForCheck();
              });
            }
            _getPath(n) {
              return this._parent
                ? (function ia(e, t) {
                    return [...t.path, e];
                  })(n, this._parent)
                : [n];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(
                v(Je, 9),
                v(Ue, 10),
                v(Pn, 10),
                v(Xt, 10),
                v(Ps, 8)
              );
            }),
            (e.ɵdir = F({
              type: e,
              selectors: [
                [
                  "",
                  "ngModel",
                  "",
                  3,
                  "formControlName",
                  "",
                  3,
                  "formControl",
                  "",
                ],
              ],
              inputs: {
                name: "name",
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"],
                options: ["ngModelOptions", "options"],
              },
              outputs: { update: "ngModelChange" },
              exportAs: ["ngModel"],
              features: [ce([mF]), ee, yt],
            })),
            e
          );
        })(),
        L_ = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({})),
            e
          );
        })();
      const SF = { provide: Xt, useExisting: se(() => da), multi: !0 };
      function z_(e, t) {
        return null == e
          ? `${t}`
          : (t && "object" == typeof t && (t = "Object"),
            `${e}: ${t}`.slice(0, 50));
      }
      let da = (() => {
          class e extends or {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(n) {
              this._compareWith = n;
            }
            writeValue(n) {
              this.value = n;
              const o = z_(this._getOptionId(n), n);
              this.setProperty("value", o);
            }
            registerOnChange(n) {
              this.onChange = (r) => {
                (this.value = this._getOptionValue(r)), n(this.value);
              };
            }
            _registerOption() {
              return (this._idCounter++).toString();
            }
            _getOptionId(n) {
              for (const r of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(r), n)) return r;
              return null;
            }
            _getOptionValue(n) {
              const r = (function IF(e) {
                return e.split(":")[0];
              })(n);
              return this._optionMap.has(r) ? this._optionMap.get(r) : n;
            }
          }
          return (
            (e.ɵfac = (function () {
              let t;
              return function (r) {
                return (t || (t = Be(e)))(r || e);
              };
            })()),
            (e.ɵdir = F({
              type: e,
              selectors: [
                ["select", "formControlName", "", 3, "multiple", ""],
                ["select", "formControl", "", 3, "multiple", ""],
                ["select", "ngModel", "", 3, "multiple", ""],
              ],
              hostBindings: function (n, r) {
                1 & n &&
                  V("change", function (i) {
                    return r.onChange(i.target.value);
                  })("blur", function () {
                    return r.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [ce([SF]), ee],
            })),
            e
          );
        })(),
        fa = (() => {
          class e {
            constructor(n, r, o) {
              (this._element = n),
                (this._renderer = r),
                (this._select = o),
                this._select && (this.id = this._select._registerOption());
            }
            set ngValue(n) {
              null != this._select &&
                (this._select._optionMap.set(this.id, n),
                this._setElementValue(z_(this.id, n)),
                this._select.writeValue(this._select.value));
            }
            set value(n) {
              this._setElementValue(n),
                this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(n) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                n
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(ut), v(fn), v(da, 9));
            }),
            (e.ɵdir = F({
              type: e,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            e
          );
        })();
      const TF = { provide: Xt, useExisting: se(() => _d), multi: !0 };
      function q_(e, t) {
        return null == e
          ? `${t}`
          : ("string" == typeof t && (t = `'${t}'`),
            t && "object" == typeof t && (t = "Object"),
            `${e}: ${t}`.slice(0, 50));
      }
      let _d = (() => {
          class e extends or {
            constructor() {
              super(...arguments),
                (this._optionMap = new Map()),
                (this._idCounter = 0),
                (this._compareWith = Object.is);
            }
            set compareWith(n) {
              this._compareWith = n;
            }
            writeValue(n) {
              let r;
              if (((this.value = n), Array.isArray(n))) {
                const o = n.map((i) => this._getOptionId(i));
                r = (i, s) => {
                  i._setSelected(o.indexOf(s.toString()) > -1);
                };
              } else
                r = (o, i) => {
                  o._setSelected(!1);
                };
              this._optionMap.forEach(r);
            }
            registerOnChange(n) {
              this.onChange = (r) => {
                const o = [],
                  i = r.selectedOptions;
                if (void 0 !== i) {
                  const s = i;
                  for (let a = 0; a < s.length; a++) {
                    const u = this._getOptionValue(s[a].value);
                    o.push(u);
                  }
                } else {
                  const s = r.options;
                  for (let a = 0; a < s.length; a++) {
                    const l = s[a];
                    if (l.selected) {
                      const u = this._getOptionValue(l.value);
                      o.push(u);
                    }
                  }
                }
                (this.value = o), n(o);
              };
            }
            _registerOption(n) {
              const r = (this._idCounter++).toString();
              return this._optionMap.set(r, n), r;
            }
            _getOptionId(n) {
              for (const r of Array.from(this._optionMap.keys()))
                if (this._compareWith(this._optionMap.get(r)._value, n))
                  return r;
              return null;
            }
            _getOptionValue(n) {
              const r = (function xF(e) {
                return e.split(":")[0];
              })(n);
              return this._optionMap.has(r) ? this._optionMap.get(r)._value : n;
            }
          }
          return (
            (e.ɵfac = (function () {
              let t;
              return function (r) {
                return (t || (t = Be(e)))(r || e);
              };
            })()),
            (e.ɵdir = F({
              type: e,
              selectors: [
                ["select", "multiple", "", "formControlName", ""],
                ["select", "multiple", "", "formControl", ""],
                ["select", "multiple", "", "ngModel", ""],
              ],
              hostBindings: function (n, r) {
                1 & n &&
                  V("change", function (i) {
                    return r.onChange(i.target);
                  })("blur", function () {
                    return r.onTouched();
                  });
              },
              inputs: { compareWith: "compareWith" },
              features: [ce([TF]), ee],
            })),
            e
          );
        })(),
        ha = (() => {
          class e {
            constructor(n, r, o) {
              (this._element = n),
                (this._renderer = r),
                (this._select = o),
                this._select && (this.id = this._select._registerOption(this));
            }
            set ngValue(n) {
              null != this._select &&
                ((this._value = n),
                this._setElementValue(q_(this.id, n)),
                this._select.writeValue(this._select.value));
            }
            set value(n) {
              this._select
                ? ((this._value = n),
                  this._setElementValue(q_(this.id, n)),
                  this._select.writeValue(this._select.value))
                : this._setElementValue(n);
            }
            _setElementValue(n) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "value",
                n
              );
            }
            _setSelected(n) {
              this._renderer.setProperty(
                this._element.nativeElement,
                "selected",
                n
              );
            }
            ngOnDestroy() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(ut), v(fn), v(_d, 9));
            }),
            (e.ɵdir = F({
              type: e,
              selectors: [["option"]],
              inputs: { ngValue: "ngValue", value: "value" },
            })),
            e
          );
        })(),
        sr = (() => {
          class e {
            constructor() {
              this._validator = na;
            }
            ngOnChanges(n) {
              if (this.inputName in n) {
                const r = this.normalizeInput(n[this.inputName].currentValue);
                (this._enabled = this.enabled(r)),
                  (this._validator = this._enabled
                    ? this.createValidator(r)
                    : na),
                  this._onChange && this._onChange();
              }
            }
            validate(n) {
              return this._validator(n);
            }
            registerOnValidatorChange(n) {
              this._onChange = n;
            }
            enabled(n) {
              return null != n;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵdir = F({ type: e, features: [yt] })),
            e
          );
        })();
      const OF = { provide: Ue, useExisting: se(() => vi), multi: !0 };
      let vi = (() => {
          class e extends sr {
            constructor() {
              super(...arguments),
                (this.inputName = "required"),
                (this.normalizeInput = (n) =>
                  (function FF(e) {
                    return null != e && !1 !== e && "false" != `${e}`;
                  })(n)),
                (this.createValidator = (n) => n_);
            }
            enabled(n) {
              return n;
            }
          }
          return (
            (e.ɵfac = (function () {
              let t;
              return function (r) {
                return (t || (t = Be(e)))(r || e);
              };
            })()),
            (e.ɵdir = F({
              type: e,
              selectors: [
                [
                  "",
                  "required",
                  "",
                  "formControlName",
                  "",
                  3,
                  "type",
                  "checkbox",
                ],
                ["", "required", "", "formControl", "", 3, "type", "checkbox"],
                ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
              ],
              hostVars: 1,
              hostBindings: function (n, r) {
                2 & n && Qt("required", r._enabled ? "" : null);
              },
              inputs: { required: "required" },
              features: [ce([OF]), ee],
            })),
            e
          );
        })(),
        jF = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({ imports: [[L_]] })),
            e
          );
        })(),
        HF = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({ imports: [jF] })),
            e
          );
        })(),
        UF = (() => {
          class e {
            transform(n, r) {
              return r && n ? e.filter(n, r) : n;
            }
            static filter(n, r) {
              const o = r.toLowerCase();
              function i(s, a) {
                for (let l in s)
                  if (
                    null !== s[l] &&
                    null != s[l] &&
                    (("object" == typeof s[l] && i(s[l], a)) ||
                      s[l].toString().toLowerCase().includes(o))
                  )
                    return !0;
                return !1;
              }
              return n.filter(function (s) {
                return i(s, r);
              });
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵpipe = $e({ name: "filter", type: e, pure: !1 })),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        $F = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e })),
            (e.ɵinj = Ke({})),
            e
          );
        })();
      class Lt extends nn {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const n = super._subscribe(t);
          return !n.closed && t.next(this._value), n;
        }
        getValue() {
          const { hasError: t, thrownError: n, _value: r } = this;
          if (t) throw n;
          return this._throwIfClosed(), r;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      function nD(e, t, n) {
        e ? rn(n, e, t) : t();
      }
      function pa(e, t) {
        const n = ie(e) ? e : () => e,
          r = (o) => o.error(n());
        return new ye(t ? (o) => t.schedule(r, 0, o) : r);
      }
      const ga = po(
        (e) =>
          function () {
            e(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      function Dd(...e) {
        return (function qF() {
          return mo(1);
        })()(Fe(e, yo(e)));
      }
      function rD(e) {
        return new ye((t) => {
          Bt(e()).subscribe(t);
        });
      }
      function oD() {
        return Re((e, t) => {
          let n = null;
          e._refCount++;
          const r = Te(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount)
              return void (n = null);
            const o = e._connection,
              i = n;
            (n = null),
              o && (!i || o === i) && o.unsubscribe(),
              t.unsubscribe();
          });
          e.subscribe(r), r.closed || (n = e.connect());
        });
      }
      class WF extends ye {
        constructor(t, n) {
          super(),
            (this.source = t),
            (this.subjectFactory = n),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            of(t) && (this.lift = t.lift);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (!t || t.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: t } = this;
          (this._subject = this._connection = null),
            null == t || t.unsubscribe();
        }
        connect() {
          let t = this._connection;
          if (!t) {
            t = this._connection = new ht();
            const n = this.getSubject();
            t.add(
              this.source.subscribe(
                Te(
                  n,
                  void 0,
                  () => {
                    this._teardown(), n.complete();
                  },
                  (r) => {
                    this._teardown(), n.error(r);
                  },
                  () => this._teardown()
                )
              )
            ),
              t.closed && ((this._connection = null), (t = ht.EMPTY));
          }
          return t;
        }
        refCount() {
          return oD()(this);
        }
      }
      function ar(e, t) {
        return Re((n, r) => {
          let o = null,
            i = 0,
            s = !1;
          const a = () => s && !o && r.complete();
          n.subscribe(
            Te(
              r,
              (l) => {
                null == o || o.unsubscribe();
                let u = 0;
                const c = i++;
                Bt(e(l, c)).subscribe(
                  (o = Te(
                    r,
                    (d) => r.next(t ? t(l, d, c, u++) : d),
                    () => {
                      (o = null), a();
                    }
                  ))
                );
              },
              () => {
                (s = !0), a();
              }
            )
          );
        });
      }
      function ZF(e, t, n, r, o) {
        return (i, s) => {
          let a = n,
            l = t,
            u = 0;
          i.subscribe(
            Te(
              s,
              (c) => {
                const d = u++;
                (l = a ? e(l, c, d) : ((a = !0), c)), r && s.next(l);
              },
              o &&
                (() => {
                  a && s.next(l), s.complete();
                })
            )
          );
        };
      }
      function iD(e, t) {
        return Re(ZF(e, t, arguments.length >= 2, !0));
      }
      function Ln(e) {
        return Re((t, n) => {
          let i,
            r = null,
            o = !1;
          (r = t.subscribe(
            Te(n, void 0, void 0, (s) => {
              (i = Bt(e(s, Ln(e)(t)))),
                r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
            })
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(n));
        });
      }
      function Cd(e) {
        return e <= 0
          ? () => on
          : Re((t, n) => {
              let r = [];
              t.subscribe(
                Te(
                  n,
                  (o) => {
                    r.push(o), e < r.length && r.shift();
                  },
                  () => {
                    for (const o of r) n.next(o);
                    n.complete();
                  },
                  void 0,
                  () => {
                    r = null;
                  }
                )
              );
            });
      }
      function sD(e = JF) {
        return Re((t, n) => {
          let r = !1;
          t.subscribe(
            Te(
              n,
              (o) => {
                (r = !0), n.next(o);
              },
              () => (r ? n.complete() : n.error(e()))
            )
          );
        });
      }
      function JF() {
        return new ga();
      }
      function aD(e) {
        return Re((t, n) => {
          let r = !1;
          t.subscribe(
            Te(
              n,
              (o) => {
                (r = !0), n.next(o);
              },
              () => {
                r || n.next(e), n.complete();
              }
            )
          );
        });
      }
      function ao(e, t) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            e ? rr((o, i) => e(o, i, r)) : $n,
            ki(1),
            n ? aD(t) : sD(() => new ga())
          );
      }
      function dt(e, t, n) {
        const r = ie(e) || t || n ? { next: e, error: t, complete: n } : e;
        return r
          ? Re((o, i) => {
              var s;
              null === (s = r.subscribe) || void 0 === s || s.call(r);
              let a = !0;
              o.subscribe(
                Te(
                  i,
                  (l) => {
                    var u;
                    null === (u = r.next) || void 0 === u || u.call(r, l),
                      i.next(l);
                  },
                  () => {
                    var l;
                    (a = !1),
                      null === (l = r.complete) || void 0 === l || l.call(r),
                      i.complete();
                  },
                  (l) => {
                    var u;
                    (a = !1),
                      null === (u = r.error) || void 0 === u || u.call(r, l),
                      i.error(l);
                  },
                  () => {
                    var l, u;
                    a &&
                      (null === (l = r.unsubscribe) ||
                        void 0 === l ||
                        l.call(r)),
                      null === (u = r.finalize) || void 0 === u || u.call(r);
                  }
                )
              );
            })
          : $n;
      }
      class vn {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class bd extends vn {
        constructor(t, n, r = "imperative", o = null) {
          super(t, n), (this.navigationTrigger = r), (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class _i extends vn {
        constructor(t, n, r) {
          super(t, n), (this.urlAfterRedirects = r);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class lD extends vn {
        constructor(t, n, r) {
          super(t, n), (this.reason = r);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class XF extends vn {
        constructor(t, n, r) {
          super(t, n), (this.error = r);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class eN extends vn {
        constructor(t, n, r, o) {
          super(t, n), (this.urlAfterRedirects = r), (this.state = o);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class tN extends vn {
        constructor(t, n, r, o) {
          super(t, n), (this.urlAfterRedirects = r), (this.state = o);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class nN extends vn {
        constructor(t, n, r, o, i) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.shouldActivate = i);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class rN extends vn {
        constructor(t, n, r, o) {
          super(t, n), (this.urlAfterRedirects = r), (this.state = o);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class oN extends vn {
        constructor(t, n, r, o) {
          super(t, n), (this.urlAfterRedirects = r), (this.state = o);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class uD {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class cD {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class iN {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class sN {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class aN {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class lN {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class dD {
        constructor(t, n, r) {
          (this.routerEvent = t), (this.position = n), (this.anchor = r);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const q = "primary";
      class uN {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const n = this.params[t];
            return Array.isArray(n) ? n[0] : n;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const n = this.params[t];
            return Array.isArray(n) ? n : [n];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function lo(e) {
        return new uN(e);
      }
      const fD = "ngNavigationCancelingError";
      function wd(e) {
        const t = Error("NavigationCancelingError: " + e);
        return (t[fD] = !0), t;
      }
      function dN(e, t, n) {
        const r = n.path.split("/");
        if (
          r.length > e.length ||
          ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
        )
          return null;
        const o = {};
        for (let i = 0; i < r.length; i++) {
          const s = r[i],
            a = e[i];
          if (s.startsWith(":")) o[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: o };
      }
      function en(e, t) {
        const n = e ? Object.keys(e) : void 0,
          r = t ? Object.keys(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let o;
        for (let i = 0; i < n.length; i++)
          if (((o = n[i]), !hD(e[o], t[o]))) return !1;
        return !0;
      }
      function hD(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((o, i) => r[i] === o);
        }
        return e === t;
      }
      function pD(e) {
        return Array.prototype.concat.apply([], e);
      }
      function gD(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Pe(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function tn(e) {
        return xu(e) ? e : Zo(e) ? Fe(Promise.resolve(e)) : B(e);
      }
      const pN = {
          exact: function vD(e, t, n) {
            if (
              !ur(e.segments, t.segments) ||
              !ma(e.segments, t.segments, n) ||
              e.numberOfChildren !== t.numberOfChildren
            )
              return !1;
            for (const r in t.children)
              if (!e.children[r] || !vD(e.children[r], t.children[r], n))
                return !1;
            return !0;
          },
          subset: _D,
        },
        mD = {
          exact: function gN(e, t) {
            return en(e, t);
          },
          subset: function mN(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every((n) => hD(e[n], t[n]))
            );
          },
          ignored: () => !0,
        };
      function yD(e, t, n) {
        return (
          pN[n.paths](e.root, t.root, n.matrixParams) &&
          mD[n.queryParams](e.queryParams, t.queryParams) &&
          !("exact" === n.fragment && e.fragment !== t.fragment)
        );
      }
      function _D(e, t, n) {
        return DD(e, t, t.segments, n);
      }
      function DD(e, t, n, r) {
        if (e.segments.length > n.length) {
          const o = e.segments.slice(0, n.length);
          return !(!ur(o, n) || t.hasChildren() || !ma(o, n, r));
        }
        if (e.segments.length === n.length) {
          if (!ur(e.segments, n) || !ma(e.segments, n, r)) return !1;
          for (const o in t.children)
            if (!e.children[o] || !_D(e.children[o], t.children[o], r))
              return !1;
          return !0;
        }
        {
          const o = n.slice(0, e.segments.length),
            i = n.slice(e.segments.length);
          return (
            !!(ur(e.segments, o) && ma(e.segments, o, r) && e.children[q]) &&
            DD(e.children[q], t, i, r)
          );
        }
      }
      function ma(e, t, n) {
        return t.every((r, o) => mD[n](e[o].parameters, r.parameters));
      }
      class lr {
        constructor(t, n, r) {
          (this.root = t), (this.queryParams = n), (this.fragment = r);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = lo(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return _N.serialize(this);
        }
      }
      class Q {
        constructor(t, n) {
          (this.segments = t),
            (this.children = n),
            (this.parent = null),
            Pe(n, (r, o) => (r.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return ya(this);
        }
      }
      class Di {
        constructor(t, n) {
          (this.path = t), (this.parameters = n);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = lo(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return MD(this);
        }
      }
      function ur(e, t) {
        return e.length === t.length && e.every((n, r) => n.path === t[r].path);
      }
      class CD {}
      class bD {
        parse(t) {
          const n = new IN(t);
          return new lr(
            n.parseRootSegment(),
            n.parseQueryParams(),
            n.parseFragment()
          );
        }
        serialize(t) {
          const n = `/${Ci(t.root, !0)}`,
            r = (function bN(e) {
              const t = Object.keys(e)
                .map((n) => {
                  const r = e[n];
                  return Array.isArray(r)
                    ? r.map((o) => `${va(n)}=${va(o)}`).join("&")
                    : `${va(n)}=${va(r)}`;
                })
                .filter((n) => !!n);
              return t.length ? `?${t.join("&")}` : "";
            })(t.queryParams);
          return `${n}${r}${
            "string" == typeof t.fragment
              ? `#${(function DN(e) {
                  return encodeURI(e);
                })(t.fragment)}`
              : ""
          }`;
        }
      }
      const _N = new bD();
      function ya(e) {
        return e.segments.map((t) => MD(t)).join("/");
      }
      function Ci(e, t) {
        if (!e.hasChildren()) return ya(e);
        if (t) {
          const n = e.children[q] ? Ci(e.children[q], !1) : "",
            r = [];
          return (
            Pe(e.children, (o, i) => {
              i !== q && r.push(`${i}:${Ci(o, !1)}`);
            }),
            r.length > 0 ? `${n}(${r.join("//")})` : n
          );
        }
        {
          const n = (function vN(e, t) {
            let n = [];
            return (
              Pe(e.children, (r, o) => {
                o === q && (n = n.concat(t(r, o)));
              }),
              Pe(e.children, (r, o) => {
                o !== q && (n = n.concat(t(r, o)));
              }),
              n
            );
          })(e, (r, o) =>
            o === q ? [Ci(e.children[q], !1)] : [`${o}:${Ci(r, !1)}`]
          );
          return 1 === Object.keys(e.children).length && null != e.children[q]
            ? `${ya(e)}/${n[0]}`
            : `${ya(e)}/(${n.join("//")})`;
        }
      }
      function wD(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function va(e) {
        return wD(e).replace(/%3B/gi, ";");
      }
      function Ed(e) {
        return wD(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function _a(e) {
        return decodeURIComponent(e);
      }
      function ED(e) {
        return _a(e.replace(/\+/g, "%20"));
      }
      function MD(e) {
        return `${Ed(e.path)}${(function CN(e) {
          return Object.keys(e)
            .map((t) => `;${Ed(t)}=${Ed(e[t])}`)
            .join("");
        })(e.parameters)}`;
      }
      const wN = /^[^\/()?;=#]+/;
      function Da(e) {
        const t = e.match(wN);
        return t ? t[0] : "";
      }
      const EN = /^[^=?&#]+/,
        AN = /^[^&#]+/;
      class IN {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Q([], {})
              : new Q([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional("&"));
          return t;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const t = [];
          for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), t.push(this.parseSegment());
          let n = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (n = this.parseParens(!0)));
          let r = {};
          return (
            this.peekStartsWith("(") && (r = this.parseParens(!1)),
            (t.length > 0 || Object.keys(n).length > 0) && (r[q] = new Q(t, n)),
            r
          );
        }
        parseSegment() {
          const t = Da(this.remaining);
          if ("" === t && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(t), new Di(_a(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(";"); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const n = Da(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = "";
          if (this.consumeOptional("=")) {
            const o = Da(this.remaining);
            o && ((r = o), this.capture(r));
          }
          t[_a(n)] = _a(r);
        }
        parseQueryParam(t) {
          const n = (function MN(e) {
            const t = e.match(EN);
            return t ? t[0] : "";
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = "";
          if (this.consumeOptional("=")) {
            const s = (function SN(e) {
              const t = e.match(AN);
              return t ? t[0] : "";
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = ED(n),
            i = ED(r);
          if (t.hasOwnProperty(o)) {
            let s = t[o];
            Array.isArray(s) || ((s = [s]), (t[o] = s)), s.push(i);
          } else t[o] = i;
        }
        parseParens(t) {
          const n = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const r = Da(this.remaining),
              o = this.remaining[r.length];
            if ("/" !== o && ")" !== o && ";" !== o)
              throw new Error(`Cannot parse url '${this.url}'`);
            let i;
            r.indexOf(":") > -1
              ? ((i = r.substr(0, r.indexOf(":"))),
                this.capture(i),
                this.capture(":"))
              : t && (i = q);
            const s = this.parseChildren();
            (n[i] = 1 === Object.keys(s).length ? s[q] : new Q([], s)),
              this.consumeOptional("//");
          }
          return n;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class AD {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const n = this.pathFromRoot(t);
          return n.length > 1 ? n[n.length - 2] : null;
        }
        children(t) {
          const n = Md(t, this._root);
          return n ? n.children.map((r) => r.value) : [];
        }
        firstChild(t) {
          const n = Md(t, this._root);
          return n && n.children.length > 0 ? n.children[0].value : null;
        }
        siblings(t) {
          const n = Ad(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children
                .map((o) => o.value)
                .filter((o) => o !== t);
        }
        pathFromRoot(t) {
          return Ad(t, this._root).map((n) => n.value);
        }
      }
      function Md(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const r = Md(e, n);
          if (r) return r;
        }
        return null;
      }
      function Ad(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = Ad(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class _n {
        constructor(t, n) {
          (this.value = t), (this.children = n);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function uo(e) {
        const t = {};
        return e && e.children.forEach((n) => (t[n.value.outlet] = n)), t;
      }
      class SD extends AD {
        constructor(t, n) {
          super(t), (this.snapshot = n), Sd(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ID(e, t) {
        const n = (function TN(e, t) {
            const s = new Ca([], {}, {}, "", {}, q, t, null, e.root, -1, {});
            return new xD("", new _n(s, []));
          })(e, t),
          r = new Lt([new Di("", {})]),
          o = new Lt({}),
          i = new Lt({}),
          s = new Lt({}),
          a = new Lt(""),
          l = new Bn(r, o, s, a, i, q, t, n.root);
        return (l.snapshot = n.root), new SD(new _n(l, []), n);
      }
      class Bn {
        constructor(t, n, r, o, i, s, a, l) {
          (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i),
            (this.outlet = s),
            (this.component = a),
            (this._futureSnapshot = l);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(Y((t) => lo(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(Y((t) => lo(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function TD(e, t = "emptyOnly") {
        const n = e.pathFromRoot;
        let r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1; ) {
            const o = n[r],
              i = n[r - 1];
            if (o.routeConfig && "" === o.routeConfig.path) r--;
            else {
              if (i.component) break;
              r--;
            }
          }
        return (function xN(e) {
          return e.reduce(
            (t, n) => ({
              params: Object.assign(Object.assign({}, t.params), n.params),
              data: Object.assign(Object.assign({}, t.data), n.data),
              resolve: Object.assign(
                Object.assign({}, t.resolve),
                n._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Ca {
        constructor(t, n, r, o, i, s, a, l, u, c, d) {
          (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i),
            (this.outlet = s),
            (this.component = a),
            (this.routeConfig = l),
            (this._urlSegment = u),
            (this._lastPathIndex = c),
            (this._resolve = d);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = lo(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = lo(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((r) => r.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class xD extends AD {
        constructor(t, n) {
          super(n), (this.url = t), Sd(this, n);
        }
        toString() {
          return FD(this._root);
        }
      }
      function Sd(e, t) {
        (t.value._routerState = e), t.children.forEach((n) => Sd(e, n));
      }
      function FD(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(FD).join(", ")} } ` : "";
        return `${e.value}${t}`;
      }
      function Id(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            en(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            en(t.params, n.params) || e.params.next(n.params),
            (function fN(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!en(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            en(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function Td(e, t) {
        const n =
          en(e.params, t.params) &&
          (function yN(e, t) {
            return (
              ur(e, t) && e.every((n, r) => en(n.parameters, t[r].parameters))
            );
          })(e.url, t.url);
        return (
          n &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Td(e.parent, t.parent))
        );
      }
      function bi(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const o = (function NN(e, t, n) {
            return t.children.map((r) => {
              for (const o of n.children)
                if (e.shouldReuseRoute(r.value, o.value.snapshot))
                  return bi(e, r, o);
              return bi(e, r);
            });
          })(e, t, n);
          return new _n(r, o);
        }
        {
          if (e.shouldAttach(t.value)) {
            const i = e.retrieve(t.value);
            if (null !== i) {
              const s = i.route;
              return (
                (s.value._futureSnapshot = t.value),
                (s.children = t.children.map((a) => bi(e, a))),
                s
              );
            }
          }
          const r = (function RN(e) {
              return new Bn(
                new Lt(e.url),
                new Lt(e.params),
                new Lt(e.queryParams),
                new Lt(e.fragment),
                new Lt(e.data),
                e.outlet,
                e.component,
                e
              );
            })(t.value),
            o = t.children.map((i) => bi(e, i));
          return new _n(r, o);
        }
      }
      function ba(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function wi(e) {
        return "object" == typeof e && null != e && e.outlets;
      }
      function xd(e, t, n, r, o) {
        let i = {};
        if (
          (r &&
            Pe(r, (a, l) => {
              i[l] = Array.isArray(a) ? a.map((u) => `${u}`) : `${a}`;
            }),
          e === t)
        )
          return new lr(n, i, o);
        const s = ND(e, t, n);
        return new lr(s, i, o);
      }
      function ND(e, t, n) {
        const r = {};
        return (
          Pe(e.children, (o, i) => {
            r[i] = o === t ? n : ND(o, t, n);
          }),
          new Q(e.segments, r)
        );
      }
      class RD {
        constructor(t, n, r) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = r),
            t && r.length > 0 && ba(r[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const o = r.find(wi);
          if (o && o !== gD(r))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class Fd {
        constructor(t, n, r) {
          (this.segmentGroup = t), (this.processChildren = n), (this.index = r);
        }
      }
      function OD(e, t, n) {
        if (
          (e || (e = new Q([], {})), 0 === e.segments.length && e.hasChildren())
        )
          return wa(e, t, n);
        const r = (function BN(e, t, n) {
            let r = 0,
              o = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= n.length) return i;
              const s = e.segments[o],
                a = n[r];
              if (wi(a)) break;
              const l = `${a}`,
                u = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === l) break;
              if (l && u && "object" == typeof u && void 0 === u.outlets) {
                if (!PD(l, u, s)) return i;
                r += 2;
              } else {
                if (!PD(l, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(e, t, n),
          o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const i = new Q(e.segments.slice(0, r.pathIndex), {});
          return (
            (i.children[q] = new Q(e.segments.slice(r.pathIndex), e.children)),
            wa(i, 0, o)
          );
        }
        return r.match && 0 === o.length
          ? new Q(e.segments, {})
          : r.match && !e.hasChildren()
          ? Nd(e, t, n)
          : r.match
          ? wa(e, 0, o)
          : Nd(e, t, n);
      }
      function wa(e, t, n) {
        if (0 === n.length) return new Q(e.segments, {});
        {
          const r = (function LN(e) {
              return wi(e[0]) ? e[0].outlets : { [q]: e };
            })(n),
            o = {};
          return (
            Pe(r, (i, s) => {
              "string" == typeof i && (i = [i]),
                null !== i && (o[s] = OD(e.children[s], t, i));
            }),
            Pe(e.children, (i, s) => {
              void 0 === r[s] && (o[s] = i);
            }),
            new Q(e.segments, o)
          );
        }
      }
      function Nd(e, t, n) {
        const r = e.segments.slice(0, t);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (wi(i)) {
            const l = jN(i.outlets);
            return new Q(r, l);
          }
          if (0 === o && ba(n[0])) {
            r.push(new Di(e.segments[t].path, kD(n[0]))), o++;
            continue;
          }
          const s = wi(i) ? i.outlets[q] : `${i}`,
            a = o < n.length - 1 ? n[o + 1] : null;
          s && a && ba(a)
            ? (r.push(new Di(s, kD(a))), (o += 2))
            : (r.push(new Di(s, {})), o++);
        }
        return new Q(r, {});
      }
      function jN(e) {
        const t = {};
        return (
          Pe(e, (n, r) => {
            "string" == typeof n && (n = [n]),
              null !== n && (t[r] = Nd(new Q([], {}), 0, n));
          }),
          t
        );
      }
      function kD(e) {
        const t = {};
        return Pe(e, (n, r) => (t[r] = `${n}`)), t;
      }
      function PD(e, t, n) {
        return e == n.path && en(t, n.parameters);
      }
      class UN {
        constructor(t, n, r, o) {
          (this.routeReuseStrategy = t),
            (this.futureState = n),
            (this.currState = r),
            (this.forwardEvent = o);
        }
        activate(t) {
          const n = this.futureState._root,
            r = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(n, r, t),
            Id(this.futureState.root),
            this.activateChildRoutes(n, r, t);
        }
        deactivateChildRoutes(t, n, r) {
          const o = uo(n);
          t.children.forEach((i) => {
            const s = i.value.outlet;
            this.deactivateRoutes(i, o[s], r), delete o[s];
          }),
            Pe(o, (i, s) => {
              this.deactivateRouteAndItsChildren(i, r);
            });
        }
        deactivateRoutes(t, n, r) {
          const o = t.value,
            i = n ? n.value : null;
          if (o === i)
            if (o.component) {
              const s = r.getContext(o.outlet);
              s && this.deactivateChildRoutes(t, n, s.children);
            } else this.deactivateChildRoutes(t, n, r);
          else i && this.deactivateRouteAndItsChildren(n, r);
        }
        deactivateRouteAndItsChildren(t, n) {
          t.value.component &&
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, n)
            : this.deactivateRouteAndOutlet(t, n);
        }
        detachAndStoreRouteSubtree(t, n) {
          const r = n.getContext(t.value.outlet),
            o = r && t.value.component ? r.children : n,
            i = uo(t);
          for (const s of Object.keys(i))
            this.deactivateRouteAndItsChildren(i[s], o);
          if (r && r.outlet) {
            const s = r.outlet.detach(),
              a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: s,
              route: t,
              contexts: a,
            });
          }
        }
        deactivateRouteAndOutlet(t, n) {
          const r = n.getContext(t.value.outlet),
            o = r && t.value.component ? r.children : n,
            i = uo(t);
          for (const s of Object.keys(i))
            this.deactivateRouteAndItsChildren(i[s], o);
          r &&
            r.outlet &&
            (r.outlet.deactivate(),
            r.children.onOutletDeactivated(),
            (r.attachRef = null),
            (r.resolver = null),
            (r.route = null));
        }
        activateChildRoutes(t, n, r) {
          const o = uo(n);
          t.children.forEach((i) => {
            this.activateRoutes(i, o[i.value.outlet], r),
              this.forwardEvent(new lN(i.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new sN(t.value.snapshot));
        }
        activateRoutes(t, n, r) {
          const o = t.value,
            i = n ? n.value : null;
          if ((Id(o), o === i))
            if (o.component) {
              const s = r.getOrCreateContext(o.outlet);
              this.activateChildRoutes(t, n, s.children);
            } else this.activateChildRoutes(t, n, r);
          else if (o.component) {
            const s = r.getOrCreateContext(o.outlet);
            if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
              const a = this.routeReuseStrategy.retrieve(o.snapshot);
              this.routeReuseStrategy.store(o.snapshot, null),
                s.children.onOutletReAttached(a.contexts),
                (s.attachRef = a.componentRef),
                (s.route = a.route.value),
                s.outlet && s.outlet.attach(a.componentRef, a.route.value),
                Id(a.route.value),
                this.activateChildRoutes(t, null, s.children);
            } else {
              const a = (function $N(e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const n = t.routeConfig;
                    if (n && n._loadedConfig) return n._loadedConfig;
                    if (n && n.component) return null;
                  }
                  return null;
                })(o.snapshot),
                l = a ? a.module.componentFactoryResolver : null;
              (s.attachRef = null),
                (s.route = o),
                (s.resolver = l),
                s.outlet && s.outlet.activateWith(o, l),
                this.activateChildRoutes(t, null, s.children);
            }
          } else this.activateChildRoutes(t, null, r);
        }
      }
      class Rd {
        constructor(t, n) {
          (this.routes = t), (this.module = n);
        }
      }
      function jn(e) {
        return "function" == typeof e;
      }
      function cr(e) {
        return e instanceof lr;
      }
      const Ei = Symbol("INITIAL_VALUE");
      function Mi() {
        return ar((e) =>
          (function GF(...e) {
            const t = yo(e),
              n = _f(e),
              { args: r, keys: o } = Qv(e);
            if (0 === r.length) return Fe([], t);
            const i = new ye(
              (function zF(e, t, n = $n) {
                return (r) => {
                  nD(
                    t,
                    () => {
                      const { length: o } = e,
                        i = new Array(o);
                      let s = o,
                        a = o;
                      for (let l = 0; l < o; l++)
                        nD(
                          t,
                          () => {
                            const u = Fe(e[l], t);
                            let c = !1;
                            u.subscribe(
                              Te(
                                r,
                                (d) => {
                                  (i[l] = d),
                                    c || ((c = !0), a--),
                                    a || r.next(n(i.slice()));
                                },
                                () => {
                                  --s || r.complete();
                                }
                              )
                            );
                          },
                          r
                        );
                    },
                    r
                  );
                };
              })(r, t, o ? (s) => Jv(o, s) : $n)
            );
            return n ? i.pipe(Zv(n)) : i;
          })(
            e.map((t) =>
              t.pipe(
                ki(1),
                (function QF(...e) {
                  const t = yo(e);
                  return Re((n, r) => {
                    (t ? Dd(e, n, t) : Dd(e, n)).subscribe(r);
                  });
                })(Ei)
              )
            )
          ).pipe(
            iD((t, n) => {
              let r = !1;
              return n.reduce(
                (o, i, s) =>
                  o !== Ei
                    ? o
                    : (i === Ei && (r = !0),
                      r || (!1 !== i && s !== n.length - 1 && !cr(i)) ? o : i),
                t
              );
            }, Ei),
            rr((t) => t !== Ei),
            Y((t) => (cr(t) ? t : !0 === t)),
            ki(1)
          )
        );
      }
      class ZN {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Ai()),
            (this.attachRef = null);
        }
      }
      class Ai {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, n) {
          const r = this.getOrCreateContext(t);
          (r.outlet = n), this.contexts.set(t, r);
        }
        onChildOutletDestroyed(t) {
          const n = this.getContext(t);
          n && ((n.outlet = null), (n.attachRef = null));
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let n = this.getContext(t);
          return n || ((n = new ZN()), this.contexts.set(t, n)), n;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      let Od = (() => {
        class e {
          constructor(n, r, o, i, s) {
            (this.parentContexts = n),
              (this.location = r),
              (this.resolver = o),
              (this.changeDetector = s),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new ge()),
              (this.deactivateEvents = new ge()),
              (this.attachEvents = new ge()),
              (this.detachEvents = new ge()),
              (this.name = i || q),
              n.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const n = this.parentContexts.getContext(this.name);
              n &&
                n.route &&
                (n.attachRef
                  ? this.attach(n.attachRef, n.route)
                  : this.activateWith(n.route, n.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const n = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(n.instance),
              n
            );
          }
          attach(n, r) {
            (this.activated = n),
              (this._activatedRoute = r),
              this.location.insert(n.hostView),
              this.attachEvents.emit(n.instance);
          }
          deactivate() {
            if (this.activated) {
              const n = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(n);
            }
          }
          activateWith(n, r) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = n;
            const s = (r = r || this.resolver).resolveComponentFactory(
                n._futureSnapshot.routeConfig.component
              ),
              a = this.parentContexts.getOrCreateContext(this.name).children,
              l = new JN(n, a, this.location.injector);
            (this.activated = this.location.createComponent(
              s,
              this.location.length,
              l
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(Ai), v(kt), v(ti), So("name"), v(Ps));
          }),
          (e.ɵdir = F({
            type: e,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
          })),
          e
        );
      })();
      class JN {
        constructor(t, n, r) {
          (this.route = t), (this.childContexts = n), (this.parent = r);
        }
        get(t, n) {
          return t === Bn
            ? this.route
            : t === Ai
            ? this.childContexts
            : this.parent.get(t, n);
        }
      }
      let VD = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = pt({
            type: e,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (n, r) {
              1 & n && Zt(0, "router-outlet");
            },
            directives: [Od],
            encapsulation: 2,
          })),
          e
        );
      })();
      function LD(e, t = "") {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          KN(r, YN(t, r));
        }
      }
      function KN(e, t) {
        e.children && LD(e.children, t);
      }
      function YN(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? `${e}/`
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ""
          : e;
      }
      function kd(e) {
        const t = e.children && e.children.map(kd),
          n = t
            ? Object.assign(Object.assign({}, e), { children: t })
            : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== q &&
            (n.component = VD),
          n
        );
      }
      function Et(e) {
        return e.outlet || q;
      }
      function BD(e, t) {
        const n = e.filter((r) => Et(r) === t);
        return n.push(...e.filter((r) => Et(r) !== t)), n;
      }
      const jD = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function Ea(e, t, n) {
        var r;
        if ("" === t.path)
          return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? Object.assign({}, jD)
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: n,
                parameters: {},
                positionalParamSegments: {},
              };
        const i = (t.matcher || dN)(n, e, t);
        if (!i) return Object.assign({}, jD);
        const s = {};
        Pe(i.posParams, (l, u) => {
          s[u] = l.path;
        });
        const a =
          i.consumed.length > 0
            ? Object.assign(
                Object.assign({}, s),
                i.consumed[i.consumed.length - 1].parameters
              )
            : s;
        return {
          matched: !0,
          consumedSegments: i.consumed,
          remainingSegments: n.slice(i.consumed.length),
          parameters: a,
          positionalParamSegments:
            null !== (r = i.posParams) && void 0 !== r ? r : {},
        };
      }
      function Ma(e, t, n, r, o = "corrected") {
        if (
          n.length > 0 &&
          (function tR(e, t, n) {
            return n.some((r) => Aa(e, t, r) && Et(r) !== q);
          })(e, n, r)
        ) {
          const s = new Q(
            t,
            (function eR(e, t, n, r) {
              const o = {};
              (o[q] = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              for (const i of n)
                if ("" === i.path && Et(i) !== q) {
                  const s = new Q([], {});
                  (s._sourceSegment = e),
                    (s._segmentIndexShift = t.length),
                    (o[Et(i)] = s);
                }
              return o;
            })(e, t, r, new Q(n, e.children))
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function nR(e, t, n) {
            return n.some((r) => Aa(e, t, r));
          })(e, n, r)
        ) {
          const s = new Q(
            e.segments,
            (function XN(e, t, n, r, o, i) {
              const s = {};
              for (const a of r)
                if (Aa(e, n, a) && !o[Et(a)]) {
                  const l = new Q([], {});
                  (l._sourceSegment = e),
                    (l._segmentIndexShift =
                      "legacy" === i ? e.segments.length : t.length),
                    (s[Et(a)] = l);
                }
              return Object.assign(Object.assign({}, o), s);
            })(e, t, n, r, e.children, o)
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: n }
          );
        }
        const i = new Q(e.segments, e.children);
        return (
          (i._sourceSegment = e),
          (i._segmentIndexShift = t.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Aa(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path
        );
      }
      function HD(e, t, n, r) {
        return (
          !!(Et(e) === r || (r !== q && Aa(t, n, e))) &&
          ("**" === e.path || Ea(t, e, n).matched)
        );
      }
      function UD(e, t, n) {
        return 0 === t.length && !e.children[n];
      }
      class Sa {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class $D {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function Si(e) {
        return pa(new Sa(e));
      }
      function GD(e) {
        return pa(new $D(e));
      }
      class sR {
        constructor(t, n, r, o, i) {
          (this.configLoader = n),
            (this.urlSerializer = r),
            (this.urlTree = o),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(hn));
        }
        apply() {
          const t = Ma(this.urlTree.root, [], [], this.config).segmentGroup,
            n = new Q(t.segments, t.children);
          return this.expandSegmentGroup(this.ngModule, this.config, n, q)
            .pipe(
              Y((i) =>
                this.createUrlTree(
                  Pd(i),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Ln((i) => {
                if (i instanceof $D)
                  return (this.allowRedirects = !1), this.match(i.urlTree);
                throw i instanceof Sa ? this.noMatchError(i) : i;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, q)
            .pipe(
              Y((o) => this.createUrlTree(Pd(o), t.queryParams, t.fragment))
            )
            .pipe(
              Ln((o) => {
                throw o instanceof Sa ? this.noMatchError(o) : o;
              })
            );
        }
        noMatchError(t) {
          return new Error(
            `Cannot match any routes. URL Segment: '${t.segmentGroup}'`
          );
        }
        createUrlTree(t, n, r) {
          const o = t.segments.length > 0 ? new Q([], { [q]: t }) : t;
          return new lr(o, n, r);
        }
        expandSegmentGroup(t, n, r, o) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.expandChildren(t, n, r).pipe(Y((i) => new Q([], i)))
            : this.expandSegment(t, r, n, r.segments, o, !0);
        }
        expandChildren(t, n, r) {
          const o = [];
          for (const i of Object.keys(r.children))
            "primary" === i ? o.unshift(i) : o.push(i);
          return Fe(o).pipe(
            ro((i) => {
              const s = r.children[i],
                a = BD(n, i);
              return this.expandSegmentGroup(t, a, s, i).pipe(
                Y((l) => ({ segment: l, outlet: i }))
              );
            }),
            iD((i, s) => ((i[s.outlet] = s.segment), i), {}),
            (function KF(e, t) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  e ? rr((o, i) => e(o, i, r)) : $n,
                  Cd(1),
                  n ? aD(t) : sD(() => new ga())
                );
            })()
          );
        }
        expandSegment(t, n, r, o, i, s) {
          return Fe(r).pipe(
            ro((a) =>
              this.expandSegmentAgainstRoute(t, n, r, a, o, i, s).pipe(
                Ln((u) => {
                  if (u instanceof Sa) return B(null);
                  throw u;
                })
              )
            ),
            ao((a) => !!a),
            Ln((a, l) => {
              if (a instanceof ga || "EmptyError" === a.name)
                return UD(n, o, i) ? B(new Q([], {})) : Si(n);
              throw a;
            })
          );
        }
        expandSegmentAgainstRoute(t, n, r, o, i, s, a) {
          return HD(o, n, i, s)
            ? void 0 === o.redirectTo
              ? this.matchSegmentAgainstRoute(t, n, o, i, s)
              : a && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s)
              : Si(n)
            : Si(n);
        }
        expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s) {
          return "**" === o.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, r, o, s)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                t,
                n,
                r,
                o,
                i,
                s
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, o) {
          const i = this.applyRedirectCommands([], r.redirectTo, {});
          return r.redirectTo.startsWith("/")
            ? GD(i)
            : this.lineralizeSegments(r, i).pipe(
                xe((s) => {
                  const a = new Q(s, {});
                  return this.expandSegment(t, a, n, s, o, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s) {
          const {
            matched: a,
            consumedSegments: l,
            remainingSegments: u,
            positionalParamSegments: c,
          } = Ea(n, o, i);
          if (!a) return Si(n);
          const d = this.applyRedirectCommands(l, o.redirectTo, c);
          return o.redirectTo.startsWith("/")
            ? GD(d)
            : this.lineralizeSegments(o, d).pipe(
                xe((f) => this.expandSegment(t, n, r, f.concat(u), s, !1))
              );
        }
        matchSegmentAgainstRoute(t, n, r, o, i) {
          if ("**" === r.path)
            return r.loadChildren
              ? (r._loadedConfig
                  ? B(r._loadedConfig)
                  : this.configLoader.load(t.injector, r)
                ).pipe(Y((d) => ((r._loadedConfig = d), new Q(o, {}))))
              : B(new Q(o, {}));
          const {
            matched: s,
            consumedSegments: a,
            remainingSegments: l,
          } = Ea(n, r, o);
          return s
            ? this.getChildConfig(t, r, o).pipe(
                xe((c) => {
                  const d = c.module,
                    f = c.routes,
                    { segmentGroup: h, slicedSegments: p } = Ma(n, a, l, f),
                    m = new Q(h.segments, h.children);
                  if (0 === p.length && m.hasChildren())
                    return this.expandChildren(d, f, m).pipe(
                      Y((S) => new Q(a, S))
                    );
                  if (0 === f.length && 0 === p.length) return B(new Q(a, {}));
                  const b = Et(r) === i;
                  return this.expandSegment(d, m, f, p, b ? q : i, !0).pipe(
                    Y((g) => new Q(a.concat(g.segments), g.children))
                  );
                })
              )
            : Si(n);
        }
        getChildConfig(t, n, r) {
          return n.children
            ? B(new Rd(n.children, t))
            : n.loadChildren
            ? void 0 !== n._loadedConfig
              ? B(n._loadedConfig)
              : this.runCanLoadGuards(t.injector, n, r).pipe(
                  xe((o) =>
                    o
                      ? this.configLoader
                          .load(t.injector, n)
                          .pipe(Y((i) => ((n._loadedConfig = i), i)))
                      : (function oR(e) {
                          return pa(
                            wd(
                              `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                            )
                          );
                        })(n)
                  )
                )
            : B(new Rd([], t));
        }
        runCanLoadGuards(t, n, r) {
          const o = n.canLoad;
          return o && 0 !== o.length
            ? B(
                o.map((s) => {
                  const a = t.get(s);
                  let l;
                  if (
                    (function zN(e) {
                      return e && jn(e.canLoad);
                    })(a)
                  )
                    l = a.canLoad(n, r);
                  else {
                    if (!jn(a)) throw new Error("Invalid CanLoad guard");
                    l = a(n, r);
                  }
                  return tn(l);
                })
              ).pipe(
                Mi(),
                dt((s) => {
                  if (!cr(s)) return;
                  const a = wd(
                    `Redirecting to "${this.urlSerializer.serialize(s)}"`
                  );
                  throw ((a.url = s), a);
                }),
                Y((s) => !0 === s)
              )
            : B(!0);
        }
        lineralizeSegments(t, n) {
          let r = [],
            o = n.root;
          for (;;) {
            if (((r = r.concat(o.segments)), 0 === o.numberOfChildren))
              return B(r);
            if (o.numberOfChildren > 1 || !o.children[q])
              return pa(
                new Error(
                  `Only absolute redirects can have named outlets. redirectTo: '${t.redirectTo}'`
                )
              );
            o = o.children[q];
          }
        }
        applyRedirectCommands(t, n, r) {
          return this.applyRedirectCreatreUrlTree(
            n,
            this.urlSerializer.parse(n),
            t,
            r
          );
        }
        applyRedirectCreatreUrlTree(t, n, r, o) {
          const i = this.createSegmentGroup(t, n.root, r, o);
          return new lr(
            i,
            this.createQueryParams(n.queryParams, this.urlTree.queryParams),
            n.fragment
          );
        }
        createQueryParams(t, n) {
          const r = {};
          return (
            Pe(t, (o, i) => {
              if ("string" == typeof o && o.startsWith(":")) {
                const a = o.substring(1);
                r[i] = n[a];
              } else r[i] = o;
            }),
            r
          );
        }
        createSegmentGroup(t, n, r, o) {
          const i = this.createSegments(t, n.segments, r, o);
          let s = {};
          return (
            Pe(n.children, (a, l) => {
              s[l] = this.createSegmentGroup(t, a, r, o);
            }),
            new Q(i, s)
          );
        }
        createSegments(t, n, r, o) {
          return n.map((i) =>
            i.path.startsWith(":")
              ? this.findPosParam(t, i, o)
              : this.findOrReturn(i, r)
          );
        }
        findPosParam(t, n, r) {
          const o = r[n.path.substring(1)];
          if (!o)
            throw new Error(
              `Cannot redirect to '${t}'. Cannot find '${n.path}'.`
            );
          return o;
        }
        findOrReturn(t, n) {
          let r = 0;
          for (const o of n) {
            if (o.path === t.path) return n.splice(r), o;
            r++;
          }
          return t;
        }
      }
      function Pd(e) {
        const t = {};
        for (const r of Object.keys(e.children)) {
          const i = Pd(e.children[r]);
          (i.segments.length > 0 || i.hasChildren()) && (t[r] = i);
        }
        return (function aR(e) {
          if (1 === e.numberOfChildren && e.children[q]) {
            const t = e.children[q];
            return new Q(e.segments.concat(t.segments), t.children);
          }
          return e;
        })(new Q(e.segments, t));
      }
      class zD {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ia {
        constructor(t, n) {
          (this.component = t), (this.route = n);
        }
      }
      function uR(e, t, n) {
        const r = e._root;
        return Ii(r, t ? t._root : null, n, [r.value]);
      }
      function Ta(e, t, n) {
        const r = (function dR(e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const n = t.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function Ii(
        e,
        t,
        n,
        r,
        o = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = uo(t);
        return (
          e.children.forEach((s) => {
            (function fR(
              e,
              t,
              n,
              r,
              o = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = e.value,
                s = t ? t.value : null,
                a = n ? n.getContext(e.value.outlet) : null;
              if (s && i.routeConfig === s.routeConfig) {
                const l = (function hR(e, t, n) {
                  if ("function" == typeof n) return n(e, t);
                  switch (n) {
                    case "pathParamsChange":
                      return !ur(e.url, t.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !ur(e.url, t.url) || !en(e.queryParams, t.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !Td(e, t) || !en(e.queryParams, t.queryParams);
                    default:
                      return !Td(e, t);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                l
                  ? o.canActivateChecks.push(new zD(r))
                  : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
                  Ii(e, t, i.component ? (a ? a.children : null) : n, r, o),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    o.canDeactivateChecks.push(new Ia(a.outlet.component, s));
              } else
                s && Ti(t, a, o),
                  o.canActivateChecks.push(new zD(r)),
                  Ii(e, null, i.component ? (a ? a.children : null) : n, r, o);
            })(s, i[s.value.outlet], n, r.concat([s.value]), o),
              delete i[s.value.outlet];
          }),
          Pe(i, (s, a) => Ti(s, n.getContext(a), o)),
          o
        );
      }
      function Ti(e, t, n) {
        const r = uo(e),
          o = e.value;
        Pe(r, (i, s) => {
          Ti(i, o.component ? (t ? t.children.getContext(s) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Ia(
              o.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              o
            )
          );
      }
      class bR {}
      function qD(e) {
        return new ye((t) => t.error(e));
      }
      class ER {
        constructor(t, n, r, o, i, s) {
          (this.rootComponentType = t),
            (this.config = n),
            (this.urlTree = r),
            (this.url = o),
            (this.paramsInheritanceStrategy = i),
            (this.relativeLinkResolution = s);
        }
        recognize() {
          const t = Ma(
              this.urlTree.root,
              [],
              [],
              this.config.filter((s) => void 0 === s.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            n = this.processSegmentGroup(this.config, t, q);
          if (null === n) return null;
          const r = new Ca(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              q,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            o = new _n(r, n),
            i = new xD(this.url, o);
          return this.inheritParamsAndData(i._root), i;
        }
        inheritParamsAndData(t) {
          const n = t.value,
            r = TD(n, this.paramsInheritanceStrategy);
          (n.params = Object.freeze(r.params)),
            (n.data = Object.freeze(r.data)),
            t.children.forEach((o) => this.inheritParamsAndData(o));
        }
        processSegmentGroup(t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.processChildren(t, n)
            : this.processSegment(t, n, n.segments, r);
        }
        processChildren(t, n) {
          const r = [];
          for (const i of Object.keys(n.children)) {
            const s = n.children[i],
              a = BD(t, i),
              l = this.processSegmentGroup(a, s, i);
            if (null === l) return null;
            r.push(...l);
          }
          const o = WD(r);
          return (
            (function MR(e) {
              e.sort((t, n) =>
                t.value.outlet === q
                  ? -1
                  : n.value.outlet === q
                  ? 1
                  : t.value.outlet.localeCompare(n.value.outlet)
              );
            })(o),
            o
          );
        }
        processSegment(t, n, r, o) {
          for (const i of t) {
            const s = this.processSegmentAgainstRoute(i, n, r, o);
            if (null !== s) return s;
          }
          return UD(n, r, o) ? [] : null;
        }
        processSegmentAgainstRoute(t, n, r, o) {
          if (t.redirectTo || !HD(t, n, r, o)) return null;
          let i,
            s = [],
            a = [];
          if ("**" === t.path) {
            const h = r.length > 0 ? gD(r).parameters : {};
            i = new Ca(
              r,
              h,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              JD(t),
              Et(t),
              t.component,
              t,
              QD(n),
              ZD(n) + r.length,
              KD(t)
            );
          } else {
            const h = Ea(n, t, r);
            if (!h.matched) return null;
            (s = h.consumedSegments),
              (a = h.remainingSegments),
              (i = new Ca(
                s,
                h.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                JD(t),
                Et(t),
                t.component,
                t,
                QD(n),
                ZD(n) + s.length,
                KD(t)
              ));
          }
          const l = (function AR(e) {
              return e.children
                ? e.children
                : e.loadChildren
                ? e._loadedConfig.routes
                : [];
            })(t),
            { segmentGroup: u, slicedSegments: c } = Ma(
              n,
              s,
              a,
              l.filter((h) => void 0 === h.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === c.length && u.hasChildren()) {
            const h = this.processChildren(l, u);
            return null === h ? null : [new _n(i, h)];
          }
          if (0 === l.length && 0 === c.length) return [new _n(i, [])];
          const d = Et(t) === o,
            f = this.processSegment(l, u, c, d ? q : o);
          return null === f ? null : [new _n(i, f)];
        }
      }
      function SR(e) {
        const t = e.value.routeConfig;
        return t && "" === t.path && void 0 === t.redirectTo;
      }
      function WD(e) {
        const t = [],
          n = new Set();
        for (const r of e) {
          if (!SR(r)) {
            t.push(r);
            continue;
          }
          const o = t.find((i) => r.value.routeConfig === i.value.routeConfig);
          void 0 !== o ? (o.children.push(...r.children), n.add(o)) : t.push(r);
        }
        for (const r of n) {
          const o = WD(r.children);
          t.push(new _n(r.value, o));
        }
        return t.filter((r) => !n.has(r));
      }
      function QD(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function ZD(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          (t = t._sourceSegment),
            (n += t._segmentIndexShift ? t._segmentIndexShift : 0);
        return n - 1;
      }
      function JD(e) {
        return e.data || {};
      }
      function KD(e) {
        return e.resolve || {};
      }
      function YD(e) {
        return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
      }
      function Vd(e) {
        return ar((t) => {
          const n = e(t);
          return n ? Fe(n).pipe(Y(() => t)) : B(t);
        });
      }
      class kR extends class OR {
        shouldDetach(t) {
          return !1;
        }
        store(t, n) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, n) {
          return t.routeConfig === n.routeConfig;
        }
      } {}
      const Ld = new U("ROUTES");
      class XD {
        constructor(t, n, r, o) {
          (this.injector = t),
            (this.compiler = n),
            (this.onLoadStartListener = r),
            (this.onLoadEndListener = o);
        }
        load(t, n) {
          if (n._loader$) return n._loader$;
          this.onLoadStartListener && this.onLoadStartListener(n);
          const o = this.loadModuleFactory(n.loadChildren).pipe(
            Y((i) => {
              this.onLoadEndListener && this.onLoadEndListener(n);
              const s = i.create(t);
              return new Rd(
                pD(s.injector.get(Ld, void 0, R.Self | R.Optional)).map(kd),
                s
              );
            }),
            Ln((i) => {
              throw ((n._loader$ = void 0), i);
            })
          );
          return (
            (n._loader$ = new WF(o, () => new nn()).pipe(oD())), n._loader$
          );
        }
        loadModuleFactory(t) {
          return tn(t()).pipe(
            xe((n) =>
              n instanceof Xm ? B(n) : Fe(this.compiler.compileModuleAsync(n))
            )
          );
        }
      }
      class VR {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, n) {
          return t;
        }
      }
      function LR(e) {
        throw e;
      }
      function BR(e, t, n) {
        return t.parse("/");
      }
      function eC(e, t) {
        return B(null);
      }
      const jR = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        HR = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let me = (() => {
        class e {
          constructor(n, r, o, i, s, a, l) {
            (this.rootComponentType = n),
              (this.urlSerializer = r),
              (this.rootContexts = o),
              (this.location = i),
              (this.config = l),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.disposed = !1),
              (this.navigationId = 0),
              (this.currentPageId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new nn()),
              (this.errorHandler = LR),
              (this.malformedUriErrorHandler = BR),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: eC,
                afterPreactivation: eC,
              }),
              (this.urlHandlingStrategy = new VR()),
              (this.routeReuseStrategy = new kR()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "corrected"),
              (this.canceledNavigationResolution = "replace"),
              (this.ngModule = s.get(hn)),
              (this.console = s.get(II));
            const d = s.get(ke);
            (this.isNgZoneEnabled = d instanceof ke && ke.isInAngularZone()),
              this.resetConfig(l),
              (this.currentUrlTree = (function hN() {
                return new lr(new Q([], {}), {}, null);
              })()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new XD(
                s,
                a,
                (f) => this.triggerEvent(new uD(f)),
                (f) => this.triggerEvent(new cD(f))
              )),
              (this.routerState = ID(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new Lt({
                id: 0,
                targetPageId: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          get browserPageId() {
            var n;
            return null === (n = this.location.getState()) || void 0 === n
              ? void 0
              : n.ɵrouterPageId;
          }
          setupNavigations(n) {
            const r = this.events;
            return n.pipe(
              rr((o) => 0 !== o.id),
              Y((o) =>
                Object.assign(Object.assign({}, o), {
                  extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
                })
              ),
              ar((o) => {
                let i = !1,
                  s = !1;
                return B(o).pipe(
                  dt((a) => {
                    this.currentNavigation = {
                      id: a.id,
                      initialUrl: a.currentRawUrl,
                      extractedUrl: a.extractedUrl,
                      trigger: a.source,
                      extras: a.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(
                            Object.assign({}, this.lastSuccessfulNavigation),
                            { previousNavigation: null }
                          )
                        : null,
                    };
                  }),
                  ar((a) => {
                    const l = this.browserUrlTree.toString(),
                      u =
                        !this.navigated ||
                        a.extractedUrl.toString() !== l ||
                        l !== this.currentUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || u) &&
                      this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl)
                    )
                      return (
                        tC(a.source) && (this.browserUrlTree = a.extractedUrl),
                        B(a).pipe(
                          ar((d) => {
                            const f = this.transitions.getValue();
                            return (
                              r.next(
                                new bd(
                                  d.id,
                                  this.serializeUrl(d.extractedUrl),
                                  d.source,
                                  d.restoredState
                                )
                              ),
                              f !== this.transitions.getValue()
                                ? on
                                : Promise.resolve(d)
                            );
                          }),
                          (function lR(e, t, n, r) {
                            return ar((o) =>
                              (function iR(e, t, n, r, o) {
                                return new sR(e, t, n, r, o).apply();
                              })(e, t, n, o.extractedUrl, r).pipe(
                                Y((i) =>
                                  Object.assign(Object.assign({}, o), {
                                    urlAfterRedirects: i,
                                  })
                                )
                              )
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config
                          ),
                          dt((d) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: d.urlAfterRedirects }
                            );
                          }),
                          (function IR(e, t, n, r, o) {
                            return xe((i) =>
                              (function wR(
                                e,
                                t,
                                n,
                                r,
                                o = "emptyOnly",
                                i = "legacy"
                              ) {
                                try {
                                  const s = new ER(
                                    e,
                                    t,
                                    n,
                                    r,
                                    o,
                                    i
                                  ).recognize();
                                  return null === s ? qD(new bR()) : B(s);
                                } catch (s) {
                                  return qD(s);
                                }
                              })(
                                e,
                                t,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                o
                              ).pipe(
                                Y((s) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: s,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (d) => this.serializeUrl(d),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          dt((d) => {
                            if ("eager" === this.urlUpdateStrategy) {
                              if (!d.extras.skipLocationChange) {
                                const h = this.urlHandlingStrategy.merge(
                                  d.urlAfterRedirects,
                                  d.rawUrl
                                );
                                this.setBrowserUrl(h, d);
                              }
                              this.browserUrlTree = d.urlAfterRedirects;
                            }
                            const f = new eN(
                              d.id,
                              this.serializeUrl(d.extractedUrl),
                              this.serializeUrl(d.urlAfterRedirects),
                              d.targetSnapshot
                            );
                            r.next(f);
                          })
                        )
                      );
                    if (
                      u &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: f,
                          extractedUrl: h,
                          source: p,
                          restoredState: m,
                          extras: b,
                        } = a,
                        C = new bd(f, this.serializeUrl(h), p, m);
                      r.next(C);
                      const g = ID(h, this.rootComponentType).snapshot;
                      return B(
                        Object.assign(Object.assign({}, a), {
                          targetSnapshot: g,
                          urlAfterRedirects: h,
                          extras: Object.assign(Object.assign({}, b), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })
                      );
                    }
                    return (this.rawUrlTree = a.rawUrl), a.resolve(null), on;
                  }),
                  Vd((a) => {
                    const {
                      targetSnapshot: l,
                      id: u,
                      extractedUrl: c,
                      rawUrl: d,
                      extras: { skipLocationChange: f, replaceUrl: h },
                    } = a;
                    return this.hooks.beforePreactivation(l, {
                      navigationId: u,
                      appliedUrlTree: c,
                      rawUrlTree: d,
                      skipLocationChange: !!f,
                      replaceUrl: !!h,
                    });
                  }),
                  dt((a) => {
                    const l = new tN(
                      a.id,
                      this.serializeUrl(a.extractedUrl),
                      this.serializeUrl(a.urlAfterRedirects),
                      a.targetSnapshot
                    );
                    this.triggerEvent(l);
                  }),
                  Y((a) =>
                    Object.assign(Object.assign({}, a), {
                      guards: uR(
                        a.targetSnapshot,
                        a.currentSnapshot,
                        this.rootContexts
                      ),
                    })
                  ),
                  (function pR(e, t) {
                    return xe((n) => {
                      const {
                        targetSnapshot: r,
                        currentSnapshot: o,
                        guards: {
                          canActivateChecks: i,
                          canDeactivateChecks: s,
                        },
                      } = n;
                      return 0 === s.length && 0 === i.length
                        ? B(
                            Object.assign(Object.assign({}, n), {
                              guardsResult: !0,
                            })
                          )
                        : (function gR(e, t, n, r) {
                            return Fe(e).pipe(
                              xe((o) =>
                                (function CR(e, t, n, r, o) {
                                  const i =
                                    t && t.routeConfig
                                      ? t.routeConfig.canDeactivate
                                      : null;
                                  return i && 0 !== i.length
                                    ? B(
                                        i.map((a) => {
                                          const l = Ta(a, t, o);
                                          let u;
                                          if (
                                            (function QN(e) {
                                              return e && jn(e.canDeactivate);
                                            })(l)
                                          )
                                            u = tn(l.canDeactivate(e, t, n, r));
                                          else {
                                            if (!jn(l))
                                              throw new Error(
                                                "Invalid CanDeactivate guard"
                                              );
                                            u = tn(l(e, t, n, r));
                                          }
                                          return u.pipe(ao());
                                        })
                                      ).pipe(Mi())
                                    : B(!0);
                                })(o.component, o.route, n, t, r)
                              ),
                              ao((o) => !0 !== o, !0)
                            );
                          })(s, r, o, e).pipe(
                            xe((a) =>
                              a &&
                              (function GN(e) {
                                return "boolean" == typeof e;
                              })(a)
                                ? (function mR(e, t, n, r) {
                                    return Fe(t).pipe(
                                      ro((o) =>
                                        Dd(
                                          (function vR(e, t) {
                                            return (
                                              null !== e && t && t(new iN(e)),
                                              B(!0)
                                            );
                                          })(o.route.parent, r),
                                          (function yR(e, t) {
                                            return (
                                              null !== e && t && t(new aN(e)),
                                              B(!0)
                                            );
                                          })(o.route, r),
                                          (function DR(e, t, n) {
                                            const r = t[t.length - 1],
                                              i = t
                                                .slice(0, t.length - 1)
                                                .reverse()
                                                .map((s) =>
                                                  (function cR(e) {
                                                    const t = e.routeConfig
                                                      ? e.routeConfig
                                                          .canActivateChild
                                                      : null;
                                                    return t && 0 !== t.length
                                                      ? { node: e, guards: t }
                                                      : null;
                                                  })(s)
                                                )
                                                .filter((s) => null !== s)
                                                .map((s) =>
                                                  rD(() =>
                                                    B(
                                                      s.guards.map((l) => {
                                                        const u = Ta(
                                                          l,
                                                          s.node,
                                                          n
                                                        );
                                                        let c;
                                                        if (
                                                          (function WN(e) {
                                                            return (
                                                              e &&
                                                              jn(
                                                                e.canActivateChild
                                                              )
                                                            );
                                                          })(u)
                                                        )
                                                          c = tn(
                                                            u.canActivateChild(
                                                              r,
                                                              e
                                                            )
                                                          );
                                                        else {
                                                          if (!jn(u))
                                                            throw new Error(
                                                              "Invalid CanActivateChild guard"
                                                            );
                                                          c = tn(u(r, e));
                                                        }
                                                        return c.pipe(ao());
                                                      })
                                                    ).pipe(Mi())
                                                  )
                                                );
                                            return B(i).pipe(Mi());
                                          })(e, o.path, n),
                                          (function _R(e, t, n) {
                                            const r = t.routeConfig
                                              ? t.routeConfig.canActivate
                                              : null;
                                            if (!r || 0 === r.length)
                                              return B(!0);
                                            const o = r.map((i) =>
                                              rD(() => {
                                                const s = Ta(i, t, n);
                                                let a;
                                                if (
                                                  (function qN(e) {
                                                    return (
                                                      e && jn(e.canActivate)
                                                    );
                                                  })(s)
                                                )
                                                  a = tn(s.canActivate(t, e));
                                                else {
                                                  if (!jn(s))
                                                    throw new Error(
                                                      "Invalid CanActivate guard"
                                                    );
                                                  a = tn(s(t, e));
                                                }
                                                return a.pipe(ao());
                                              })
                                            );
                                            return B(o).pipe(Mi());
                                          })(e, o.route, n)
                                        )
                                      ),
                                      ao((o) => !0 !== o, !0)
                                    );
                                  })(r, i, e, t)
                                : B(a)
                            ),
                            Y((a) =>
                              Object.assign(Object.assign({}, n), {
                                guardsResult: a,
                              })
                            )
                          );
                    });
                  })(this.ngModule.injector, (a) => this.triggerEvent(a)),
                  dt((a) => {
                    if (cr(a.guardsResult)) {
                      const u = wd(
                        `Redirecting to "${this.serializeUrl(a.guardsResult)}"`
                      );
                      throw ((u.url = a.guardsResult), u);
                    }
                    const l = new nN(
                      a.id,
                      this.serializeUrl(a.extractedUrl),
                      this.serializeUrl(a.urlAfterRedirects),
                      a.targetSnapshot,
                      !!a.guardsResult
                    );
                    this.triggerEvent(l);
                  }),
                  rr(
                    (a) =>
                      !!a.guardsResult ||
                      (this.restoreHistory(a),
                      this.cancelNavigationTransition(a, ""),
                      !1)
                  ),
                  Vd((a) => {
                    if (a.guards.canActivateChecks.length)
                      return B(a).pipe(
                        dt((l) => {
                          const u = new rN(
                            l.id,
                            this.serializeUrl(l.extractedUrl),
                            this.serializeUrl(l.urlAfterRedirects),
                            l.targetSnapshot
                          );
                          this.triggerEvent(u);
                        }),
                        ar((l) => {
                          let u = !1;
                          return B(l).pipe(
                            (function TR(e, t) {
                              return xe((n) => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: o },
                                } = n;
                                if (!o.length) return B(n);
                                let i = 0;
                                return Fe(o).pipe(
                                  ro((s) =>
                                    (function xR(e, t, n, r) {
                                      return (function FR(e, t, n, r) {
                                        const o = YD(e);
                                        if (0 === o.length) return B({});
                                        const i = {};
                                        return Fe(o).pipe(
                                          xe((s) =>
                                            (function NR(e, t, n, r) {
                                              const o = Ta(e, t, r);
                                              return tn(
                                                o.resolve
                                                  ? o.resolve(t, n)
                                                  : o(t, n)
                                              );
                                            })(e[s], t, n, r).pipe(
                                              dt((a) => {
                                                i[s] = a;
                                              })
                                            )
                                          ),
                                          Cd(1),
                                          xe(() =>
                                            YD(i).length === o.length
                                              ? B(i)
                                              : on
                                          )
                                        );
                                      })(e._resolve, e, t, r).pipe(
                                        Y(
                                          (i) => (
                                            (e._resolvedData = i),
                                            (e.data = Object.assign(
                                              Object.assign({}, e.data),
                                              TD(e, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(s.route, r, e, t)
                                  ),
                                  dt(() => i++),
                                  Cd(1),
                                  xe((s) => (i === o.length ? B(n) : on))
                                );
                              });
                            })(
                              this.paramsInheritanceStrategy,
                              this.ngModule.injector
                            ),
                            dt({
                              next: () => (u = !0),
                              complete: () => {
                                u ||
                                  (this.restoreHistory(l),
                                  this.cancelNavigationTransition(
                                    l,
                                    "At least one route resolver didn't emit any value."
                                  ));
                              },
                            })
                          );
                        }),
                        dt((l) => {
                          const u = new oN(
                            l.id,
                            this.serializeUrl(l.extractedUrl),
                            this.serializeUrl(l.urlAfterRedirects),
                            l.targetSnapshot
                          );
                          this.triggerEvent(u);
                        })
                      );
                  }),
                  Vd((a) => {
                    const {
                      targetSnapshot: l,
                      id: u,
                      extractedUrl: c,
                      rawUrl: d,
                      extras: { skipLocationChange: f, replaceUrl: h },
                    } = a;
                    return this.hooks.afterPreactivation(l, {
                      navigationId: u,
                      appliedUrlTree: c,
                      rawUrlTree: d,
                      skipLocationChange: !!f,
                      replaceUrl: !!h,
                    });
                  }),
                  Y((a) => {
                    const l = (function FN(e, t, n) {
                      const r = bi(e, t._root, n ? n._root : void 0);
                      return new SD(r, t);
                    })(
                      this.routeReuseStrategy,
                      a.targetSnapshot,
                      a.currentRouterState
                    );
                    return Object.assign(Object.assign({}, a), {
                      targetRouterState: l,
                    });
                  }),
                  dt((a) => {
                    (this.currentUrlTree = a.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        a.urlAfterRedirects,
                        a.rawUrl
                      )),
                      (this.routerState = a.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (a.extras.skipLocationChange ||
                          this.setBrowserUrl(this.rawUrlTree, a),
                        (this.browserUrlTree = a.urlAfterRedirects));
                  }),
                  ((e, t, n) =>
                    Y(
                      (r) => (
                        new UN(
                          t,
                          r.targetRouterState,
                          r.currentRouterState,
                          n
                        ).activate(e),
                        r
                      )
                    ))(this.rootContexts, this.routeReuseStrategy, (a) =>
                    this.triggerEvent(a)
                  ),
                  dt({
                    next() {
                      i = !0;
                    },
                    complete() {
                      i = !0;
                    },
                  }),
                  (function YF(e) {
                    return Re((t, n) => {
                      try {
                        t.subscribe(n);
                      } finally {
                        n.add(e);
                      }
                    });
                  })(() => {
                    var a;
                    i ||
                      s ||
                      this.cancelNavigationTransition(
                        o,
                        `Navigation ID ${o.id} is not equal to the current navigation id ${this.navigationId}`
                      ),
                      (null === (a = this.currentNavigation) || void 0 === a
                        ? void 0
                        : a.id) === o.id && (this.currentNavigation = null);
                  }),
                  Ln((a) => {
                    if (
                      ((s = !0),
                      (function cN(e) {
                        return e && e[fD];
                      })(a))
                    ) {
                      const l = cr(a.url);
                      l || ((this.navigated = !0), this.restoreHistory(o, !0));
                      const u = new lD(
                        o.id,
                        this.serializeUrl(o.extractedUrl),
                        a.message
                      );
                      r.next(u),
                        l
                          ? setTimeout(() => {
                              const c = this.urlHandlingStrategy.merge(
                                  a.url,
                                  this.rawUrlTree
                                ),
                                d = {
                                  skipLocationChange:
                                    o.extras.skipLocationChange,
                                  replaceUrl:
                                    "eager" === this.urlUpdateStrategy ||
                                    tC(o.source),
                                };
                              this.scheduleNavigation(
                                c,
                                "imperative",
                                null,
                                d,
                                {
                                  resolve: o.resolve,
                                  reject: o.reject,
                                  promise: o.promise,
                                }
                              );
                            }, 0)
                          : o.resolve(!1);
                    } else {
                      this.restoreHistory(o, !0);
                      const l = new XF(
                        o.id,
                        this.serializeUrl(o.extractedUrl),
                        a
                      );
                      r.next(l);
                      try {
                        o.resolve(this.errorHandler(a));
                      } catch (u) {
                        o.reject(u);
                      }
                    }
                    return on;
                  })
                );
              })
            );
          }
          resetRootComponentType(n) {
            (this.rootComponentType = n),
              (this.routerState.root.component = this.rootComponentType);
          }
          setTransition(n) {
            this.transitions.next(
              Object.assign(Object.assign({}, this.transitions.value), n)
            );
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((n) => {
                const r = "popstate" === n.type ? "popstate" : "hashchange";
                "popstate" === r &&
                  setTimeout(() => {
                    var o;
                    const i = { replaceUrl: !0 },
                      s = (
                        null === (o = n.state) || void 0 === o
                          ? void 0
                          : o.navigationId
                      )
                        ? n.state
                        : null;
                    if (s) {
                      const l = Object.assign({}, s);
                      delete l.navigationId,
                        delete l.ɵrouterPageId,
                        0 !== Object.keys(l).length && (i.state = l);
                    }
                    const a = this.parseUrl(n.url);
                    this.scheduleNavigation(a, r, s, i);
                  }, 0);
              }));
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(n) {
            this.events.next(n);
          }
          resetConfig(n) {
            LD(n),
              (this.config = n.map(kd)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.transitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(n, r = {}) {
            const {
                relativeTo: o,
                queryParams: i,
                fragment: s,
                queryParamsHandling: a,
                preserveFragment: l,
              } = r,
              u = o || this.routerState.root,
              c = l ? this.currentUrlTree.fragment : s;
            let d = null;
            switch (a) {
              case "merge":
                d = Object.assign(
                  Object.assign({}, this.currentUrlTree.queryParams),
                  i
                );
                break;
              case "preserve":
                d = this.currentUrlTree.queryParams;
                break;
              default:
                d = i || null;
            }
            return (
              null !== d && (d = this.removeEmptyProps(d)),
              (function ON(e, t, n, r, o) {
                if (0 === n.length) return xd(t.root, t.root, t.root, r, o);
                const i = (function kN(e) {
                  if ("string" == typeof e[0] && 1 === e.length && "/" === e[0])
                    return new RD(!0, 0, e);
                  let t = 0,
                    n = !1;
                  const r = e.reduce((o, i, s) => {
                    if ("object" == typeof i && null != i) {
                      if (i.outlets) {
                        const a = {};
                        return (
                          Pe(i.outlets, (l, u) => {
                            a[u] = "string" == typeof l ? l.split("/") : l;
                          }),
                          [...o, { outlets: a }]
                        );
                      }
                      if (i.segmentPath) return [...o, i.segmentPath];
                    }
                    return "string" != typeof i
                      ? [...o, i]
                      : 0 === s
                      ? (i.split("/").forEach((a, l) => {
                          (0 == l && "." === a) ||
                            (0 == l && "" === a
                              ? (n = !0)
                              : ".." === a
                              ? t++
                              : "" != a && o.push(a));
                        }),
                        o)
                      : [...o, i];
                  }, []);
                  return new RD(n, t, r);
                })(n);
                if (i.toRoot()) return xd(t.root, t.root, new Q([], {}), r, o);
                const s = (function PN(e, t, n) {
                    if (e.isAbsolute) return new Fd(t.root, !0, 0);
                    if (-1 === n.snapshot._lastPathIndex) {
                      const i = n.snapshot._urlSegment;
                      return new Fd(i, i === t.root, 0);
                    }
                    const r = ba(e.commands[0]) ? 0 : 1;
                    return (function VN(e, t, n) {
                      let r = e,
                        o = t,
                        i = n;
                      for (; i > o; ) {
                        if (((i -= o), (r = r.parent), !r))
                          throw new Error("Invalid number of '../'");
                        o = r.segments.length;
                      }
                      return new Fd(r, !1, o - i);
                    })(
                      n.snapshot._urlSegment,
                      n.snapshot._lastPathIndex + r,
                      e.numberOfDoubleDots
                    );
                  })(i, t, e),
                  a = s.processChildren
                    ? wa(s.segmentGroup, s.index, i.commands)
                    : OD(s.segmentGroup, s.index, i.commands);
                return xd(t.root, s.segmentGroup, a, r, o);
              })(u, this.currentUrlTree, n, d, null != c ? c : null)
            );
          }
          navigateByUrl(n, r = { skipLocationChange: !1 }) {
            const o = cr(n) ? n : this.parseUrl(n),
              i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
            return this.scheduleNavigation(i, "imperative", null, r);
          }
          navigate(n, r = { skipLocationChange: !1 }) {
            return (
              (function UR(e) {
                for (let t = 0; t < e.length; t++) {
                  const n = e[t];
                  if (null == n)
                    throw new Error(
                      `The requested path contains ${n} segment at index ${t}`
                    );
                }
              })(n),
              this.navigateByUrl(this.createUrlTree(n, r), r)
            );
          }
          serializeUrl(n) {
            return this.urlSerializer.serialize(n);
          }
          parseUrl(n) {
            let r;
            try {
              r = this.urlSerializer.parse(n);
            } catch (o) {
              r = this.malformedUriErrorHandler(o, this.urlSerializer, n);
            }
            return r;
          }
          isActive(n, r) {
            let o;
            if (
              ((o =
                !0 === r
                  ? Object.assign({}, jR)
                  : !1 === r
                  ? Object.assign({}, HR)
                  : r),
              cr(n))
            )
              return yD(this.currentUrlTree, n, o);
            const i = this.parseUrl(n);
            return yD(this.currentUrlTree, i, o);
          }
          removeEmptyProps(n) {
            return Object.keys(n).reduce((r, o) => {
              const i = n[o];
              return null != i && (r[o] = i), r;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (n) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = n.id),
                  (this.currentPageId = n.targetPageId),
                  this.events.next(
                    new _i(
                      n.id,
                      this.serializeUrl(n.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  n.resolve(!0);
              },
              (n) => {
                this.console.warn(`Unhandled Navigation Error: ${n}`);
              }
            );
          }
          scheduleNavigation(n, r, o, i, s) {
            var a, l;
            if (this.disposed) return Promise.resolve(!1);
            let u, c, d;
            s
              ? ((u = s.resolve), (c = s.reject), (d = s.promise))
              : (d = new Promise((p, m) => {
                  (u = p), (c = m);
                }));
            const f = ++this.navigationId;
            let h;
            return (
              "computed" === this.canceledNavigationResolution
                ? (0 === this.currentPageId && (o = this.location.getState()),
                  (h =
                    o && o.ɵrouterPageId
                      ? o.ɵrouterPageId
                      : i.replaceUrl || i.skipLocationChange
                      ? null !== (a = this.browserPageId) && void 0 !== a
                        ? a
                        : 0
                      : (null !== (l = this.browserPageId) && void 0 !== l
                          ? l
                          : 0) + 1))
                : (h = 0),
              this.setTransition({
                id: f,
                targetPageId: h,
                source: r,
                restoredState: o,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: n,
                extras: i,
                resolve: u,
                reject: c,
                promise: d,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              d.catch((p) => Promise.reject(p))
            );
          }
          setBrowserUrl(n, r) {
            const o = this.urlSerializer.serialize(n),
              i = Object.assign(
                Object.assign({}, r.extras.state),
                this.generateNgRouterState(r.id, r.targetPageId)
              );
            this.location.isCurrentPathEqualTo(o) || r.extras.replaceUrl
              ? this.location.replaceState(o, "", i)
              : this.location.go(o, "", i);
          }
          restoreHistory(n, r = !1) {
            var o, i;
            if ("computed" === this.canceledNavigationResolution) {
              const s = this.currentPageId - n.targetPageId;
              ("popstate" !== n.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  (null === (o = this.currentNavigation) || void 0 === o
                    ? void 0
                    : o.finalUrl)) ||
              0 === s
                ? this.currentUrlTree ===
                    (null === (i = this.currentNavigation) || void 0 === i
                      ? void 0
                      : i.finalUrl) &&
                  0 === s &&
                  (this.resetState(n),
                  (this.browserUrlTree = n.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(s);
            } else
              "replace" === this.canceledNavigationResolution &&
                (r && this.resetState(n), this.resetUrlToCurrentUrlTree());
          }
          resetState(n) {
            (this.routerState = n.currentRouterState),
              (this.currentUrlTree = n.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                n.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          cancelNavigationTransition(n, r) {
            const o = new lD(n.id, this.serializeUrl(n.extractedUrl), r);
            this.triggerEvent(o), n.resolve(!1);
          }
          generateNgRouterState(n, r) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: n, ɵrouterPageId: r }
              : { navigationId: n };
          }
        }
        return (
          (e.ɵfac = function (n) {
            Au();
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function tC(e) {
        return "imperative" !== e;
      }
      let co = (() => {
          class e {
            constructor(n, r, o, i, s) {
              (this.router = n),
                (this.route = r),
                (this.tabIndexAttribute = o),
                (this.renderer = i),
                (this.el = s),
                (this.commands = null),
                (this.onChanges = new nn()),
                this.setTabIndexIfNotOnNativeEl("0");
            }
            setTabIndexIfNotOnNativeEl(n) {
              if (null != this.tabIndexAttribute) return;
              const r = this.renderer,
                o = this.el.nativeElement;
              null !== n
                ? r.setAttribute(o, "tabindex", n)
                : r.removeAttribute(o, "tabindex");
            }
            ngOnChanges(n) {
              this.onChanges.next(this);
            }
            set routerLink(n) {
              null != n
                ? ((this.commands = Array.isArray(n) ? n : [n]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick() {
              if (null === this.urlTree) return !0;
              const n = {
                skipLocationChange: fo(this.skipLocationChange),
                replaceUrl: fo(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, n), !0;
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: fo(this.preserveFragment),
                  });
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(me), v(Bn), So("tabindex"), v(fn), v(ut));
            }),
            (e.ɵdir = F({
              type: e,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (n, r) {
                1 & n &&
                  V("click", function () {
                    return r.onClick();
                  });
              },
              inputs: {
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
                routerLink: "routerLink",
              },
              features: [yt],
            })),
            e
          );
        })(),
        xa = (() => {
          class e {
            constructor(n, r, o) {
              (this.router = n),
                (this.route = r),
                (this.locationStrategy = o),
                (this.commands = null),
                (this.href = null),
                (this.onChanges = new nn()),
                (this.subscription = n.events.subscribe((i) => {
                  i instanceof _i && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(n) {
              this.commands = null != n ? (Array.isArray(n) ? n : [n]) : null;
            }
            ngOnChanges(n) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(n, r, o, i, s) {
              if (
                0 !== n ||
                r ||
                o ||
                i ||
                s ||
                ("string" == typeof this.target && "_self" != this.target) ||
                null === this.urlTree
              )
                return !0;
              const a = {
                skipLocationChange: fo(this.skipLocationChange),
                replaceUrl: fo(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, a), !1;
            }
            updateTargetUrlAndHref() {
              this.href =
                null !== this.urlTree
                  ? this.locationStrategy.prepareExternalUrl(
                      this.router.serializeUrl(this.urlTree)
                    )
                  : null;
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: fo(this.preserveFragment),
                  });
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(me), v(Bn), v(no));
            }),
            (e.ɵdir = F({
              type: e,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (n, r) {
                1 & n &&
                  V("click", function (i) {
                    return r.onClick(
                      i.button,
                      i.ctrlKey,
                      i.shiftKey,
                      i.altKey,
                      i.metaKey
                    );
                  }),
                  2 & n && Qt("target", r.target)("href", r.href, Lo);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
                routerLink: "routerLink",
              },
              features: [yt],
            })),
            e
          );
        })();
      function fo(e) {
        return "" === e || !!e;
      }
      class nC {}
      class rC {
        preload(t, n) {
          return B(null);
        }
      }
      let oC = (() => {
          class e {
            constructor(n, r, o, i) {
              (this.router = n),
                (this.injector = o),
                (this.preloadingStrategy = i),
                (this.loader = new XD(
                  o,
                  r,
                  (l) => n.triggerEvent(new uD(l)),
                  (l) => n.triggerEvent(new cD(l))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  rr((n) => n instanceof _i),
                  ro(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const n = this.injector.get(hn);
              return this.processRoutes(n, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(n, r) {
              const o = [];
              for (const i of r)
                if (i.loadChildren && !i.canLoad && i._loadedConfig) {
                  const s = i._loadedConfig;
                  o.push(this.processRoutes(s.module, s.routes));
                } else
                  i.loadChildren && !i.canLoad
                    ? o.push(this.preloadConfig(n, i))
                    : i.children && o.push(this.processRoutes(n, i.children));
              return Fe(o).pipe(
                mo(),
                Y((i) => {})
              );
            }
            preloadConfig(n, r) {
              return this.preloadingStrategy.preload(r, () =>
                (r._loadedConfig
                  ? B(r._loadedConfig)
                  : this.loader.load(n.injector, r)
                ).pipe(
                  xe(
                    (i) => (
                      (r._loadedConfig = i),
                      this.processRoutes(i.module, i.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(me), A(Ly), A(We), A(nC));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Bd = (() => {
          class e {
            constructor(n, r, o = {}) {
              (this.router = n),
                (this.viewportScroller = r),
                (this.options = o),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (o.scrollPositionRestoration =
                  o.scrollPositionRestoration || "disabled"),
                (o.anchorScrolling = o.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((n) => {
                n instanceof bd
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = n.navigationTrigger),
                    (this.restoredId = n.restoredState
                      ? n.restoredState.navigationId
                      : 0))
                  : n instanceof _i &&
                    ((this.lastId = n.id),
                    this.scheduleScrollEvent(
                      n,
                      this.router.parseUrl(n.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((n) => {
                n instanceof dD &&
                  (n.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(n.position)
                    : n.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(n.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(n, r) {
              this.router.triggerEvent(
                new dD(
                  n,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  r
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (e.ɵfac = function (n) {
              Au();
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const dr = new U("ROUTER_CONFIGURATION"),
        iC = new U("ROUTER_FORROOT_GUARD"),
        qR = [
          Ec,
          { provide: CD, useClass: bD },
          {
            provide: me,
            useFactory: function KR(e, t, n, r, o, i, s = {}, a, l) {
              const u = new me(null, e, t, n, r, o, pD(i));
              return (
                a && (u.urlHandlingStrategy = a),
                l && (u.routeReuseStrategy = l),
                (function YR(e, t) {
                  e.errorHandler && (t.errorHandler = e.errorHandler),
                    e.malformedUriErrorHandler &&
                      (t.malformedUriErrorHandler = e.malformedUriErrorHandler),
                    e.onSameUrlNavigation &&
                      (t.onSameUrlNavigation = e.onSameUrlNavigation),
                    e.paramsInheritanceStrategy &&
                      (t.paramsInheritanceStrategy =
                        e.paramsInheritanceStrategy),
                    e.relativeLinkResolution &&
                      (t.relativeLinkResolution = e.relativeLinkResolution),
                    e.urlUpdateStrategy &&
                      (t.urlUpdateStrategy = e.urlUpdateStrategy),
                    e.canceledNavigationResolution &&
                      (t.canceledNavigationResolution =
                        e.canceledNavigationResolution);
                })(s, u),
                s.enableTracing &&
                  u.events.subscribe((c) => {
                    var d, f;
                    null === (d = console.group) ||
                      void 0 === d ||
                      d.call(console, `Router Event: ${c.constructor.name}`),
                      console.log(c.toString()),
                      console.log(c),
                      null === (f = console.groupEnd) ||
                        void 0 === f ||
                        f.call(console);
                  }),
                u
              );
            },
            deps: [
              CD,
              Ai,
              Ec,
              We,
              Ly,
              Ld,
              dr,
              [class PR {}, new An()],
              [class RR {}, new An()],
            ],
          },
          Ai,
          {
            provide: Bn,
            useFactory: function XR(e) {
              return e.routerState.root;
            },
            deps: [me],
          },
          oC,
          rC,
          class zR {
            preload(t, n) {
              return n().pipe(Ln(() => B(null)));
            }
          },
          { provide: dr, useValue: { enableTracing: !1 } },
        ];
      function WR() {
        return new $y("Router", me);
      }
      let sC = (() => {
        class e {
          constructor(n, r) {}
          static forRoot(n, r) {
            return {
              ngModule: e,
              providers: [
                qR,
                aC(n),
                {
                  provide: iC,
                  useFactory: JR,
                  deps: [[me, new An(), new Oo()]],
                },
                { provide: dr, useValue: r || {} },
                {
                  provide: no,
                  useFactory: ZR,
                  deps: [nr, [new ss(wc), new An()], dr],
                },
                { provide: Bd, useFactory: QR, deps: [me, Bx, dr] },
                {
                  provide: nC,
                  useExisting:
                    r && r.preloadingStrategy ? r.preloadingStrategy : rC,
                },
                { provide: $y, multi: !0, useFactory: WR },
                [
                  jd,
                  { provide: sc, multi: !0, useFactory: eO, deps: [jd] },
                  { provide: lC, useFactory: tO, deps: [jd] },
                  { provide: Vy, multi: !0, useExisting: lC },
                ],
              ],
            };
          }
          static forChild(n) {
            return { ngModule: e, providers: [aC(n)] };
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(iC, 8), A(me, 8));
          }),
          (e.ɵmod = nt({ type: e })),
          (e.ɵinj = Ke({})),
          e
        );
      })();
      function QR(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Bd(e, t, n);
      }
      function ZR(e, t, n = {}) {
        return n.useHash ? new DT(e, t) : new lv(e, t);
      }
      function JR(e) {
        return "guarded";
      }
      function aC(e) {
        return [
          { provide: rw, multi: !0, useValue: e },
          { provide: Ld, multi: !0, useValue: e },
        ];
      }
      let jd = (() => {
        class e {
          constructor(n) {
            (this.injector = n),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new nn());
          }
          appInitializer() {
            return this.injector.get(yT, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let r = null;
              const o = new Promise((a) => (r = a)),
                i = this.injector.get(me),
                s = this.injector.get(dr);
              return (
                "disabled" === s.initialNavigation
                  ? (i.setUpLocationChangeListener(), r(!0))
                  : "enabled" === s.initialNavigation ||
                    "enabledBlocking" === s.initialNavigation
                  ? ((i.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? B(null)
                        : ((this.initNavigation = !0),
                          r(!0),
                          this.resultOfPreactivationDone)),
                    i.initialNavigation())
                  : r(!0),
                o
              );
            });
          }
          bootstrapListener(n) {
            const r = this.injector.get(dr),
              o = this.injector.get(oC),
              i = this.injector.get(Bd),
              s = this.injector.get(me),
              a = this.injector.get(mc);
            n === a.components[0] &&
              (("enabledNonBlocking" === r.initialNavigation ||
                void 0 === r.initialNavigation) &&
                s.initialNavigation(),
              o.setUpPreloading(),
              i.init(),
              s.resetRootComponentType(a.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(A(We));
          }),
          (e.ɵprov = N({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function eO(e) {
        return e.appInitializer.bind(e);
      }
      function tO(e) {
        return e.bootstrapListener.bind(e);
      }
      const lC = new U("Router Initializer");
      let fr = (() => {
          class e {
            constructor(n, r) {
              (this.httpclient = n), (this.router = r);
            }
            registerUser(n, r) {
              return this.httpclient.post(n, r);
            }
            loginUser(n, r) {
              return this.httpclient.post(n, r);
            }
            loggedIn() {
              return !!localStorage.getItem("token");
            }
            logoutUser() {
              localStorage.removeItem("token"),
                this.router.navigate(["/login"]);
            }
            getToken() {
              return localStorage.getItem("token");
            }
            verifyToken(n) {
              return this.httpclient.get(n);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(ta), A(me));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })(),
        Fa = (() => {
          class e {
            constructor(n) {
              this.httpclient = n;
            }
            getAllBooks(n) {
              return this.httpclient.get(n);
            }
            getBook(n) {
              return this.httpclient.get(n);
            }
            deleteBook(n) {
              return this.httpclient.delete(n);
            }
            addBook(n, r) {
              return this.httpclient.post(n, r);
            }
            updateBook(n, r) {
              return this.httpclient.put(n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(ta));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })();
      function rO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " enter a valid title "), _());
      }
      function oO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " enter a valid author name "), _());
      }
      function iO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " enter a valid publisher name "), _());
      }
      function sO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " choose a valid date "), _());
      }
      function aO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " enter a valid genre "), _());
      }
      function lO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " enter a valid description "), _());
      }
      function uO(e, t) {
        1 & e && (y(0, "p", 36), w(1, " enter a valid image link "), _());
      }
      let cO = (() => {
          class e {
            constructor(n, r, o, i) {
              (this.authservice = n),
                (this.bookservice = r),
                (this.router = o),
                (this.activatedroute = i),
                (this.title = ""),
                (this.author = ""),
                (this.publisher = ""),
                (this.genre = ""),
                (this.description = ""),
                (this.image = ""),
                (this.date_published = ""),
                (this.bookId = "");
            }
            ngOnInit() {
              this.authservice
                .verifyToken("https://getbookinfo.herokuapp.com/verify/token")
                .subscribe(
                  (n) => console.log(n),
                  (n) => {
                    n instanceof oo &&
                      401 === n.status &&
                      this.router.navigate(["/login"]);
                  }
                ),
                this.activatedroute.queryParamMap.subscribe(
                  (n) => (this.bookId = n.get("id"))
                ),
                console.log(this.bookId),
                this.bookId
                  ? this.bookservice
                      .getBook(
                        `https://getbookinfo.herokuapp.com/books/${this.bookId}`
                      )
                      .subscribe((n) => this.populateDom(n))
                  : console.log("null");
            }
            populateDom(n) {
              (this.title = n.title),
                (this.author = n.author),
                (this.publisher = n.publisher),
                (this.genre = n.genre),
                (this.description = n.description),
                (this.date_published = n.date_published),
                (this.image = n.image);
            }
            confirmEvent() {
              this.bookId ? this.updateBook() : this.submitBook();
            }
            submitBook() {
              const n = {
                title: this.title,
                author: this.author,
                publisher: this.publisher,
                genre: this.genre,
                description: this.description,
                image: this.image,
                date_published: this.date_published,
              };
              console.log(n),
                this.bookservice
                  .addBook(
                    "https://getbookinfo.herokuapp.com/books/add/book",
                    n
                  )
                  .subscribe(
                    (r) => console.log(r),
                    (r) => {
                      r instanceof oo &&
                        401 === r.status &&
                        this.router.navigate(["/login"]);
                    }
                  ),
                this.router.navigate([""]);
            }
            updateBook() {
              const n = {
                title: this.title,
                author: this.author,
                publisher: this.publisher,
                genre: this.genre,
                description: this.description,
                image: this.image,
                date_published: this.date_published,
              };
              console.log(n),
                this.bookservice
                  .updateBook(
                    `https://getbookinfo.herokuapp.com/books/edit/${this.bookId}`,
                    n
                  )
                  .subscribe((r) => console.log(r)),
                this.router.navigate(["/book", this.bookId]);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(fr), v(Fa), v(me), v(Bn));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-admin"]],
              decls: 76,
              vars: 15,
              consts: [
                [1, "container"],
                [1, "card"],
                [1, "card-header", 2, "text-align", "center"],
                [1, "card-body"],
                [1, "mb-3"],
                ["for", "exampleFormControlInput1", 1, "form-label"],
                ["class", "error-message", 4, "ngIf"],
                [
                  "type",
                  "text",
                  "id",
                  "exampleFormControlInput1",
                  "placeholder",
                  "title..",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["titleInput", "ngModel"],
                [
                  "type",
                  "text",
                  "id",
                  "exampleFormControlInput1",
                  "placeholder",
                  "author..",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["authorInput", "ngModel"],
                [
                  "type",
                  "text",
                  "id",
                  "exampleFormControlInput1",
                  "placeholder",
                  "publisher..",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["publisherInput", "ngModel"],
                [
                  "type",
                  "date",
                  "id",
                  "exampleFormControlInput1",
                  "placeholder",
                  "published on..",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["dateInput", "ngModel"],
                [
                  "aria-label",
                  ".form-select-sm example",
                  "required",
                  "",
                  1,
                  "form-select",
                  "form-select-sm",
                  "mb-3",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["genreInput", "ngModel"],
                ["selected", ""],
                ["value", "fiction"],
                ["value", "autobiography"],
                ["value", "science"],
                ["value", "history"],
                ["value", "mathematics"],
                ["value", "law"],
                ["value", "medicine"],
                ["value", "technology & engineering"],
                ["value", "finance"],
                ["value", "art"],
                ["value", "travel"],
                ["value", "self-help book"],
                ["value", "thriller"],
                [
                  "type",
                  "text",
                  "id",
                  "exampleFormControlInput1",
                  "placeholder",
                  "enter description",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["descriptionInput", "ngModel"],
                [
                  "type",
                  "text",
                  "id",
                  "exampleFormControlInput1",
                  "placeholder",
                  "image link..",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                ["imageInput", "ngModel"],
                [
                  "type",
                  "button",
                  1,
                  "btn",
                  "btn-success",
                  2,
                  "width",
                  "100%",
                  3,
                  "disabled",
                  "click",
                ],
                [1, "error-message"],
              ],
              template: function (n, r) {
                if (
                  (1 & n &&
                    (y(0, "div", 0)(1, "div", 1)(2, "h5", 2),
                    w(3, "Add new book"),
                    _(),
                    y(4, "div", 3)(5, "div", 4)(6, "label", 5),
                    w(7, "Book Name:"),
                    _(),
                    Nt(8, rO, 2, 0, "p", 6),
                    y(9, "input", 7, 8),
                    V("ngModelChange", function (i) {
                      return (r.title = i);
                    }),
                    _()(),
                    y(11, "div", 4)(12, "label", 5),
                    w(13, "Author:"),
                    _(),
                    Nt(14, oO, 2, 0, "p", 6),
                    y(15, "input", 9, 10),
                    V("ngModelChange", function (i) {
                      return (r.author = i);
                    }),
                    _()(),
                    y(17, "div", 4)(18, "label", 5),
                    w(19, "Publisher:"),
                    _(),
                    Nt(20, iO, 2, 0, "p", 6),
                    y(21, "input", 11, 12),
                    V("ngModelChange", function (i) {
                      return (r.publisher = i);
                    }),
                    _()(),
                    y(23, "div", 4)(24, "label", 5),
                    w(25, "Date published:"),
                    _(),
                    Nt(26, sO, 2, 0, "p", 6),
                    y(27, "input", 13, 14),
                    V("ngModelChange", function (i) {
                      return (r.date_published = i);
                    }),
                    _()(),
                    y(29, "label", 5),
                    w(30, " Genre:"),
                    _(),
                    y(31, "select", 15, 16),
                    V("ngModelChange", function (i) {
                      return (r.genre = i);
                    }),
                    Nt(33, aO, 2, 0, "p", 6),
                    y(34, "option", 17),
                    w(35, "select genre"),
                    _(),
                    y(36, "option", 18),
                    w(37, "fiction"),
                    _(),
                    y(38, "option", 19),
                    w(39, "autobiography"),
                    _(),
                    y(40, "option", 20),
                    w(41, "science"),
                    _(),
                    y(42, "option", 21),
                    w(43, "history"),
                    _(),
                    y(44, "option", 22),
                    w(45, "mathematics"),
                    _(),
                    y(46, "option", 23),
                    w(47, "law"),
                    _(),
                    y(48, "option", 24),
                    w(49, "medicine"),
                    _(),
                    y(50, "option", 25),
                    w(51, " technology & engineering "),
                    _(),
                    y(52, "option", 26),
                    w(53, "finance"),
                    _(),
                    y(54, "option", 27),
                    w(55, "art"),
                    _(),
                    y(56, "option", 28),
                    w(57, "travel"),
                    _(),
                    y(58, "option", 29),
                    w(59, "self-help book"),
                    _(),
                    y(60, "option", 30),
                    w(61, "thriller"),
                    _()(),
                    y(62, "div", 4)(63, "label", 5),
                    w(64, "Description:"),
                    _(),
                    Nt(65, lO, 2, 0, "p", 6),
                    y(66, "input", 31, 32),
                    V("ngModelChange", function (i) {
                      return (r.description = i);
                    }),
                    _()(),
                    y(68, "div", 4)(69, "label", 5),
                    w(70, "Image link:"),
                    _(),
                    Nt(71, uO, 2, 0, "p", 6),
                    y(72, "input", 33, 34),
                    V("ngModelChange", function (i) {
                      return (r.image = i);
                    }),
                    _()(),
                    y(74, "button", 35),
                    V("click", function () {
                      return r.confirmEvent();
                    }),
                    w(75, " submit "),
                    _()()()()),
                  2 & n)
                ) {
                  const o = xn(10),
                    i = xn(16),
                    s = xn(22),
                    a = xn(28),
                    l = xn(32),
                    u = xn(67),
                    c = xn(73);
                  I(8),
                    G("ngIf", o.touched && o.errors),
                    I(1),
                    G("ngModel", r.title),
                    I(5),
                    G("ngIf", i.touched && i.errors),
                    I(1),
                    G("ngModel", r.author),
                    I(5),
                    G("ngIf", s.touched && s.errors),
                    I(1),
                    G("ngModel", r.publisher),
                    I(5),
                    G("ngIf", a.touched && a.errors),
                    I(1),
                    G("ngModel", r.date_published),
                    I(4),
                    G("ngModel", r.genre),
                    I(2),
                    G("ngIf", l.touched && l.errors),
                    I(32),
                    G("ngIf", u.touched && u.errors),
                    I(1),
                    G("ngModel", r.description),
                    I(5),
                    G("ngIf", c.touched && c.errors),
                    I(1),
                    G("ngModel", r.image),
                    I(2),
                    G(
                      "disabled",
                      o.errors ||
                        i.errors ||
                        s.errors ||
                        a.errors ||
                        l.errors ||
                        u.errors ||
                        c.errors
                    );
                }
              },
              directives: [kc, On, vi, io, ir, da, fa, ha],
              styles: [
                ".card[_ngcontent-%COMP%]{width:700px;margin:50px auto auto}.error-message[_ngcontent-%COMP%]{color:red;text-align:center;font-size:small}",
              ],
            })),
            e
          );
        })(),
        dO = (() => {
          class e {
            constructor(n, r, o) {
              (this.activatedroute = n),
                (this.bookservice = r),
                (this.router = o),
                (this.isAdmin = !1),
                (this.bookId = ""),
                (this.book = {});
            }
            ngOnInit() {
              (this.bookId = this.activatedroute.snapshot.paramMap.get("id")),
                console.log(this.bookId),
                this.bookservice
                  .getBook(
                    `https://getbookinfo.herokuapp.com/books/${this.bookId}`
                  )
                  .subscribe(
                    (n) => (this.book = n),
                    (n) => {
                      n instanceof oo &&
                        401 === n.status &&
                        this.router.navigate(["/login"]);
                    }
                  ),
                (this.isAdmin = JSON.parse(
                  localStorage.getItem("user")
                ).isAdmin);
            }
            removeBook() {
              this.bookservice
                .deleteBook(
                  `https://getbookinfo.herokuapp.com/books/remove/${this.bookId}`
                )
                .subscribe(),
                this.router.navigate([""]).then(() => window.location.reload());
            }
            changeBook() {
              this.router.navigate(["/admin"], {
                queryParams: { id: this.bookId },
              });
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(Bn), v(Fa), v(me));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-book"]],
              decls: 38,
              vars: 8,
              consts: [
                [1, "book-container"],
                [1, "card", 2, "width", "100%"],
                ["alt", "book image", 1, "card-img-top", 3, "src"],
                [1, "card-body"],
                [1, "card-title"],
                [1, "card-text"],
                [1, "table", "caption-top"],
                [3, "hidden"],
                ["type", "button", 1, "btn", "btn-primary", 3, "click"],
                ["type", "button", 1, "btn", "btn-danger", 3, "click"],
              ],
              template: function (n, r) {
                1 & n &&
                  (y(0, "div", 0)(1, "div", 1),
                  Zt(2, "img", 2),
                  y(3, "div", 3)(4, "h5", 4),
                  w(5),
                  _(),
                  w(6),
                  Zt(7, "hr"),
                  y(8, "strong"),
                  w(9, "About the Book:"),
                  _(),
                  y(10, "p", 5),
                  w(11),
                  _(),
                  Zt(12, "hr"),
                  y(13, "strong"),
                  w(14, "Book details:"),
                  _(),
                  Zt(15, "br"),
                  y(16, "table", 6)(17, "tbody")(18, "tr")(19, "td"),
                  w(20, "published"),
                  _(),
                  y(21, "td"),
                  w(22),
                  _()(),
                  y(23, "tr")(24, "td"),
                  w(25, "publisher"),
                  _(),
                  y(26, "td"),
                  w(27),
                  _()(),
                  y(28, "tr")(29, "td"),
                  w(30, "genre"),
                  _(),
                  y(31, "td"),
                  w(32),
                  _()()()(),
                  y(33, "span", 7)(34, "button", 8),
                  V("click", function () {
                    return r.changeBook();
                  }),
                  w(35, " Edit "),
                  _(),
                  y(36, "button", 9),
                  V("click", function () {
                    return r.removeBook();
                  }),
                  w(37, " Delete "),
                  _()()()()()),
                  2 & n &&
                    (I(2),
                    G("src", r.book.image, Lo),
                    I(3),
                    Yn(" ", r.book.title, " "),
                    I(1),
                    Yn(" Author:", r.book.author, " "),
                    I(5),
                    lt(r.book.description),
                    I(11),
                    lt(r.book.date_published.split("T")[0]),
                    I(5),
                    lt(r.book.publisher),
                    I(5),
                    lt(r.book.genre),
                    I(1),
                    G("hidden", !r.isAdmin));
              },
              styles: [
                "img[_ngcontent-%COMP%]{height:400px;width:500px}.book-container[_ngcontent-%COMP%]{margin:auto;width:700px}.card[_ngcontent-%COMP%]{align-items:center}.card-body[_ngcontent-%COMP%]{text-align:center}button[_ngcontent-%COMP%]{min-width:100px;margin-right:10px}",
              ],
            })),
            e
          );
        })();
      const fO = function (e) {
        return ["/book", e];
      };
      function hO(e, t) {
        if (
          (1 & e &&
            (y(0, "div", 12)(1, "div", 13),
            Zt(2, "img", 14),
            y(3, "div", 15)(4, "strong", 16),
            w(5),
            _(),
            y(6, "p", 17),
            w(7),
            _(),
            y(8, "strong"),
            w(9),
            _()()()()),
          2 & e)
        ) {
          const n = t.$implicit;
          G("routerLink", ry(5, fO, n._id)),
            I(2),
            G("src", n.image, Lo),
            I(3),
            lt(n.title),
            I(2),
            Yn(" ", n.author, " "),
            I(2),
            lt(n.genre);
        }
      }
      let pO = (() => {
          class e {
            constructor(n, r) {
              (this.booksservice = n),
                (this.router = r),
                (this.filterTerm = "");
            }
            ngOnInit() {
              this.booksservice
                .getAllBooks("https://getbookinfo.herokuapp.com/home")
                .subscribe(
                  (n) => (this.books = n),
                  (n) => {
                    n instanceof oo &&
                      401 === n.status &&
                      this.router.navigate(["/login"]);
                  }
                );
            }
            onSelect(n) {
              console.log(n.target.value),
                this.booksservice
                  .getAllBooks(
                    `https://getbookinfo.herokuapp.com/home/${n.target.value}`
                  )
                  .subscribe((r) => (this.books = r));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(Fa), v(me));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-home"]],
              decls: 18,
              vars: 5,
              consts: [
                [1, "navbar", 2, "background-color", "#e3f2fd"],
                [1, "container-fluid"],
                [
                  "aria-label",
                  ".form-select-sm example",
                  1,
                  "form-select",
                  "form-select-sm",
                  3,
                  "change",
                ],
                ["selected", ""],
                ["value", "date_published"],
                ["value", "title"],
                ["value", "author"],
                ["value", "rating"],
                [
                  "type",
                  "search",
                  "placeholder",
                  "Search",
                  "aria-label",
                  "Search",
                  1,
                  "search",
                  "form-control",
                  "me-2",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "container", "mt-2"],
                [1, "row", "row-cols-1", "row-cols-md-5", "g-3"],
                ["class", "col", 3, "routerLink", 4, "ngFor", "ngForOf"],
                [1, "col", 3, "routerLink"],
                [1, "card"],
                [
                  "alt",
                  "book image",
                  1,
                  "card-img-top",
                  2,
                  "height",
                  "220px",
                  "width",
                  "240px",
                  3,
                  "src",
                ],
                [1, "card-body"],
                [1, "card-title"],
                [1, "card-text"],
              ],
              template: function (n, r) {
                1 & n &&
                  (y(0, "nav", 0)(1, "div", 1)(2, "select", 2),
                  V("change", function (i) {
                    return r.onSelect(i);
                  }),
                  y(3, "option", 3),
                  w(4, "sort using"),
                  _(),
                  y(5, "option", 4),
                  w(6, "date published"),
                  _(),
                  y(7, "option", 5),
                  w(8, "book name"),
                  _(),
                  y(9, "option", 6),
                  w(10, "author name"),
                  _(),
                  y(11, "option", 7),
                  w(12, "rating"),
                  _()(),
                  y(13, "input", 8),
                  V("ngModelChange", function (i) {
                    return (r.filterTerm = i);
                  }),
                  _()()(),
                  y(14, "div", 9)(15, "div", 10),
                  Nt(16, hO, 10, 7, "div", 11),
                  (function uy(e, t) {
                    const n = J();
                    let r;
                    const o = e + 20;
                    n.firstCreatePass
                      ? ((r = (function GS(e, t) {
                          if (t)
                            for (let n = t.length - 1; n >= 0; n--) {
                              const r = t[n];
                              if (e === r.name) return r;
                            }
                        })(t, n.pipeRegistry)),
                        (n.data[o] = r),
                        r.onDestroy &&
                          (n.destroyHooks || (n.destroyHooks = [])).push(
                            o,
                            r.onDestroy
                          ))
                      : (r = n.data[o]);
                    const i = r.factory || (r.factory = Zn(r.type)),
                      s = Dn(v);
                    try {
                      const a = Xi(!1),
                        l = i();
                      return (
                        Xi(a),
                        (function dM(e, t, n, r) {
                          n >= e.data.length &&
                            ((e.data[n] = null), (e.blueprint[n] = null)),
                            (t[n] = r);
                        })(n, D(), o, l),
                        l
                      );
                    } finally {
                      Dn(s);
                    }
                  })(17, "filter"),
                  _()()),
                  2 & n &&
                    (I(13),
                    G("ngModel", r.filterTerm),
                    I(3),
                    G(
                      "ngForOf",
                      (function cy(e, t, n, r) {
                        const o = e + 20,
                          i = D(),
                          s = _r(i, o);
                        return (function ii(e, t) {
                          return e[1].data[t].pure;
                        })(i, o)
                          ? iy(i, Ge(), t, s.transform, n, r, s)
                          : s.transform(n, r);
                      })(17, 2, r.books, r.filterTerm)
                    ));
              },
              directives: [fa, ha, On, io, ir, Oc, co],
              pipes: [UF],
              styles: [
                ".card[_ngcontent-%COMP%]{cursor:pointer;align-items:center}select[_ngcontent-%COMP%]{width:200px;height:40px}.search[_ngcontent-%COMP%]{display:inline;width:200px;height:40px}",
              ],
            })),
            e
          );
        })(),
        uC = (() => {
          class e {
            constructor(n) {
              this.httpclient = n;
            }
            addFeedback(n, r) {
              return this.httpclient.post(n, r);
            }
            getFeedbacks(n) {
              return this.httpclient.get(n);
            }
            feedbackExists(n, r) {
              return this.httpclient.post(n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(ta));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })(),
        gO = (() => {
          class e {
            constructor(n, r) {
              (this.router = n),
                (this.feedbackservice = r),
                (this.form2 = !0),
                (this.form3 = !0),
                (this.res1 = ""),
                (this.res2 = []),
                (this.res3 = "");
            }
            ngOnInit() {
              this.feedbackservice
                .feedbackExists(
                  "https://getbookinfo.herokuapp.com/feedbacks/user/feedback/exists",
                  {
                    username: JSON.parse(localStorage.getItem("user")).username,
                  }
                )
                .subscribe((n) => this.checkFeedbackExistsResponse(n));
            }
            retrieveFirstResponse(n) {
              (this.res1 = n),
                "yes" === n || "not sure" === n
                  ? (this.form3 = !1)
                  : "no" === n && (this.form2 = !1);
            }
            retrieveSecondResponse(n) {
              this.res2.push(n);
            }
            submitFeedback() {
              this.feedbackservice
                .addFeedback(
                  "https://getbookinfo.herokuapp.com/feedbacks/add/feedback",
                  {
                    liked: this.res1,
                    issues: this.res2,
                    feedback: this.res3,
                    username: JSON.parse(localStorage.getItem("user")).username,
                    date_added: new Date(Date.now()),
                  }
                )
                .subscribe((n) => console.log(n)),
                this.router.navigate([""]);
            }
            checkFeedbackExistsResponse(n) {
              "feedback exists" === n.message &&
                (alert("you have already given the feedback"),
                this.router.navigate([""]));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(me), v(uC));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-feedback"]],
              decls: 39,
              vars: 3,
              consts: [
                [1, "container"],
                [1, "mb-3", "form1"],
                ["for", "exampleInputEmail1", 1, "form-label"],
                [
                  "aria-label",
                  ".form-select-sm example",
                  1,
                  "form-select",
                  "form-select-sm",
                  3,
                  "change",
                ],
                ["selected", ""],
                ["value", "yes"],
                ["value", "no"],
                ["value", "not sure"],
                [1, "mb-3", "form2", 3, "hidden"],
                [1, "container2"],
                [1, "form-check", "mb-2"],
                [
                  "type",
                  "checkbox",
                  "value",
                  "contains inaccurate or outdated information",
                  1,
                  "form-check-input",
                  3,
                  "change",
                ],
                ["for", "defaultCheck1", 1, "form-check-label"],
                [
                  "type",
                  "checkbox",
                  "value",
                  "missing important information",
                  1,
                  "form-check-input",
                  3,
                  "change",
                ],
                [
                  "type",
                  "checkbox",
                  "value",
                  "confusing or difficult to understand",
                  1,
                  "form-check-input",
                  3,
                  "change",
                ],
                [
                  "type",
                  "checkbox",
                  "value",
                  "something else",
                  1,
                  "form-check-input",
                  3,
                  "change",
                ],
                [1, "mb-3", "form3", 3, "hidden"],
                ["for", "exampleInputPassword1", 1, "form-label"],
                ["name", "", 1, "form-control", 3, "ngModel", "ngModelChange"],
                ["type", "submit", 1, "btn", "btn-primary", 3, "click"],
              ],
              template: function (n, r) {
                1 & n &&
                  (y(0, "div", 0)(1, "div", 1)(2, "label", 2),
                  w(3, "Did you like this site?"),
                  _(),
                  y(4, "select", 3),
                  V("change", function (i) {
                    return r.retrieveFirstResponse(i.target.value);
                  }),
                  y(5, "option", 4),
                  w(6, "select"),
                  _(),
                  y(7, "option", 5),
                  w(8, "yes"),
                  _(),
                  y(9, "option", 6),
                  w(10, "no"),
                  _(),
                  y(11, "option", 7),
                  w(12, "not sure"),
                  _()()(),
                  y(13, "div", 8)(14, "label", 2),
                  w(
                    15,
                    "we're sorry to hear that, how can we improve our article? "
                  ),
                  _(),
                  y(16, "div", 9)(17, "div", 10)(18, "input", 11),
                  V("change", function (i) {
                    return r.retrieveSecondResponse(i.target.value);
                  }),
                  _(),
                  y(19, "label", 12),
                  w(20, " contains inaccurate or outdated information "),
                  _()(),
                  y(21, "div", 10)(22, "input", 13),
                  V("change", function (i) {
                    return r.retrieveSecondResponse(i.target.value);
                  }),
                  _(),
                  y(23, "label", 12),
                  w(24, " missing important information "),
                  _()(),
                  y(25, "div", 10)(26, "input", 14),
                  V("change", function (i) {
                    return r.retrieveSecondResponse(i.target.value);
                  }),
                  _(),
                  y(27, "label", 12),
                  w(28, " confusing or difficult to understand "),
                  _()(),
                  y(29, "div", 10)(30, "input", 15),
                  V("change", function (i) {
                    return r.retrieveSecondResponse(i.target.value);
                  }),
                  _(),
                  y(31, "label", 12),
                  w(32, " something else "),
                  _()()()(),
                  y(33, "div", 16)(34, "label", 17),
                  w(35, "Any other feedback.."),
                  _(),
                  y(36, "textarea", 18),
                  V("ngModelChange", function (i) {
                    return (r.res3 = i);
                  }),
                  _()(),
                  y(37, "button", 19),
                  V("click", function () {
                    return r.submitFeedback();
                  }),
                  w(38, " Submit "),
                  _()()),
                  2 & n &&
                    (I(13),
                    G("hidden", r.form2),
                    I(20),
                    G("hidden", r.form3),
                    I(3),
                    G("ngModel", r.res3));
              },
              directives: [fa, ha, On, io, ir],
              styles: [
                ".container[_ngcontent-%COMP%]{width:500px;margin:50px auto auto;background-color:#d3d3d3;border:1px solid black;padding:20px}.container3[_ngcontent-%COMP%], .container2[_ngcontent-%COMP%]{width:300px;margin:auto;padding:20px 0 20px 20px}",
              ],
            })),
            e
          );
        })();
      function mO(e, t) {
        if (
          (1 & e &&
            (y(0, "tr")(1, "th", 4),
            w(2),
            _(),
            y(3, "td"),
            w(4),
            _(),
            y(5, "td"),
            w(6),
            _(),
            y(7, "td"),
            w(8),
            _(),
            y(9, "td"),
            w(10),
            _()()),
          2 & e)
        ) {
          const n = t.$implicit,
            r = t.index;
          I(2),
            lt(r + 1),
            I(2),
            lt(n.username),
            I(2),
            lt(n.issues[0]),
            I(2),
            lt(n.feedback),
            I(2),
            lt(n.date_added.toString().split("T")[0]);
        }
      }
      let yO = (() => {
        class e {
          constructor(n) {
            (this.feedbackservice = n), (this.feedbacks = []);
          }
          ngOnInit() {
            this.feedbackservice
              .getFeedbacks(
                "https://getbookinfo.herokuapp.com/feedbacks/display"
              )
              .subscribe((n) => (this.feedbacks = n));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(uC));
          }),
          (e.ɵcmp = pt({
            type: e,
            selectors: [["app-feedbacks"]],
            decls: 16,
            vars: 1,
            consts: [
              [1, "container"],
              [1, "table"],
              ["scope", "col"],
              [4, "ngFor", "ngForOf"],
              ["scope", "row"],
            ],
            template: function (n, r) {
              1 & n &&
                (y(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th", 2),
                w(5, "#"),
                _(),
                y(6, "th", 2),
                w(7, "Username"),
                _(),
                y(8, "th", 2),
                w(9, "Issues"),
                _(),
                y(10, "th", 2),
                w(11, "Feedback"),
                _(),
                y(12, "th", 2),
                w(13, "Date added"),
                _()()(),
                y(14, "tbody"),
                Nt(15, mO, 11, 5, "tr", 3),
                _()()()),
                2 & n && (I(15), G("ngForOf", r.feedbacks));
            },
            directives: [Oc],
            styles: [""],
          })),
          e
        );
      })();
      const vO = function () {
        return ["/register"];
      };
      let _O = (() => {
        class e {
          constructor(n, r) {
            (this.authservice = n),
              (this.router = r),
              (this.username = ""),
              (this.password = ""),
              (this.errorMessage = "");
          }
          ngOnInit() {
            localStorage.getItem("token")
              ? this.router.navigate([""])
              : "https://getbookinfo.herokuapp.com/login" ===
                  window.location.href && this.router.navigate(["/login"]);
          }
          signinUser() {
            const n = { username: this.username, password: this.password };
            console.log(n),
              this.authservice
                .loginUser(
                  "https://getbookinfo.herokuapp.com/auth/login/user",
                  n
                )
                .subscribe((r) => this.isValidUser(r));
          }
          isValidUser(n) {
            200 === n.status
              ? (localStorage.setItem("token", n.token),
                console.log(n.user.username),
                localStorage.setItem("user", JSON.stringify(n.user)),
                this.router.navigate([""]),
                window.location.reload())
              : (this.errorMessage =
                  404 === n.status ? "invalid user" : "password is incorrect");
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(v(fr), v(me));
          }),
          (e.ɵcmp = pt({
            type: e,
            selectors: [["app-login"]],
            decls: 14,
            vars: 5,
            consts: [
              [1, "container"],
              ["type", "text", 1, "error", 3, "ngModel", "ngModelChange"],
              [1, "form-group"],
              ["for", "exampleInputEmail1"],
              [
                "type",
                "email",
                "aria-describedby",
                "emailHelp",
                "placeholder",
                "Enter username",
                1,
                "form-control",
                3,
                "ngModel",
                "ngModelChange",
              ],
              [1, "form-group", "mt-3"],
              ["for", "exampleInputPassword1"],
              [
                "type",
                "password",
                "placeholder",
                "Password",
                1,
                "form-control",
                3,
                "ngModel",
                "ngModelChange",
              ],
              ["type", "submit", 1, "btn", "btn-primary", "mt-3", 3, "click"],
              [1, "mt-3", 2, "text-align", "center", 3, "routerLink"],
            ],
            template: function (n, r) {
              1 & n &&
                (y(0, "div", 0)(1, "input", 1),
                V("ngModelChange", function (i) {
                  return (r.errorMessage = i);
                }),
                _(),
                y(2, "div", 2)(3, "label", 3),
                w(4, "Username:"),
                _(),
                y(5, "input", 4),
                V("ngModelChange", function (i) {
                  return (r.username = i);
                }),
                _()(),
                y(6, "div", 5)(7, "label", 6),
                w(8, "Password:"),
                _(),
                y(9, "input", 7),
                V("ngModelChange", function (i) {
                  return (r.password = i);
                }),
                _()(),
                y(10, "button", 8),
                V("click", function () {
                  return r.signinUser();
                }),
                w(11, " login "),
                _(),
                y(12, "p", 9),
                w(13, " don't have an account?\xa0signup "),
                _()()),
                2 & n &&
                  (I(1),
                  G("ngModel", r.errorMessage),
                  I(4),
                  G("ngModel", r.username),
                  I(4),
                  G("ngModel", r.password),
                  I(3),
                  G("routerLink", eo(4, vO)));
            },
            directives: [On, io, ir, co],
            styles: [
              ".container[_ngcontent-%COMP%]{width:600px;margin:100px auto auto;border:1px solid lightgray;padding:50px}button[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{border:none;color:red}p[_ngcontent-%COMP%]:hover{cursor:pointer}",
            ],
          })),
          e
        );
      })();
      const DO = function () {
        return ["/login"];
      };
      let CO = (() => {
          class e {
            constructor(n, r) {
              (this.authservice = n),
                (this.router = r),
                (this.name = ""),
                (this.username = ""),
                (this.email = ""),
                (this.password = ""),
                (this.isAdmin = !1);
            }
            ngOnInit() {}
            toggleValue() {
              this.isAdmin = !this.isAdmin;
            }
            createUser() {
              const n = {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                isAdmin: this.isAdmin,
              };
              console.log(n),
                this.authservice
                  .registerUser(
                    "https://getbookinfo.herokuapp.com/auth/register/user",
                    n
                  )
                  .subscribe((r) => console.log(r)),
                this.router.navigate(["/login"]);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(fr), v(me));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-register"]],
              decls: 25,
              vars: 6,
              consts: [
                [1, "container"],
                [1, "form-group"],
                ["for", "exampleInputEmail1"],
                [
                  "type",
                  "text",
                  "aria-describedby",
                  "emailHelp",
                  "placeholder",
                  "Enter name",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "form-group", "mt-3"],
                [
                  "type",
                  "text",
                  "aria-describedby",
                  "emailHelp",
                  "placeholder",
                  "Enter username",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [
                  "type",
                  "email",
                  "aria-describedby",
                  "emailHelp",
                  "placeholder",
                  "Enter email",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [
                  "type",
                  "password",
                  "placeholder",
                  "Password",
                  "required",
                  "",
                  1,
                  "form-control",
                  3,
                  "ngModel",
                  "ngModelChange",
                ],
                [1, "form-check", "mt-3"],
                [
                  "type",
                  "checkbox",
                  "value",
                  "admin",
                  1,
                  "form-check-input",
                  3,
                  "change",
                ],
                ["for", "flexCheckDefault", 1, "form-check-label"],
                ["type", "submit", 1, "btn", "btn-primary", "mt-3", 3, "click"],
                [1, "mt-3", 2, "text-align", "center", 3, "routerLink"],
              ],
              template: function (n, r) {
                1 & n &&
                  (y(0, "div", 0)(1, "div", 1)(2, "label", 2),
                  w(3, "Name:"),
                  _(),
                  y(4, "input", 3),
                  V("ngModelChange", function (i) {
                    return (r.name = i);
                  }),
                  _()(),
                  y(5, "div", 4)(6, "label", 2),
                  w(7, "Username:"),
                  _(),
                  y(8, "input", 5),
                  V("ngModelChange", function (i) {
                    return (r.username = i);
                  }),
                  _()(),
                  y(9, "div", 4)(10, "label", 2),
                  w(11, "Email:"),
                  _(),
                  y(12, "input", 6),
                  V("ngModelChange", function (i) {
                    return (r.email = i);
                  }),
                  _()(),
                  y(13, "div", 4)(14, "label"),
                  w(15, "Password:"),
                  _(),
                  y(16, "input", 7),
                  V("ngModelChange", function (i) {
                    return (r.password = i);
                  }),
                  _()(),
                  y(17, "div", 8)(18, "input", 9),
                  V("change", function () {
                    return r.toggleValue();
                  }),
                  _(),
                  y(19, "label", 10),
                  w(20, " register as admin "),
                  _()(),
                  y(21, "button", 11),
                  V("click", function () {
                    return r.createUser();
                  }),
                  w(22, " create account "),
                  _(),
                  y(23, "p", 12),
                  w(24, " already have account?\xa0login "),
                  _()()),
                  2 & n &&
                    (I(4),
                    G("ngModel", r.name),
                    I(4),
                    G("ngModel", r.username),
                    I(4),
                    G("ngModel", r.email),
                    I(4),
                    G("ngModel", r.password),
                    I(7),
                    G("routerLink", eo(5, DO)));
              },
              directives: [On, vi, io, ir, co],
              styles: [
                ".container[_ngcontent-%COMP%]{width:600px;margin:100px auto auto;border:1px solid lightgray;padding:50px}button[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]:hover{cursor:pointer}",
              ],
            })),
            e
          );
        })(),
        ho = (() => {
          class e {
            constructor(n, r) {
              (this.authservice = n), (this.router = r);
            }
            canActivate() {
              if (this.authservice.loggedIn()) return !0;
              this.router.navigate(["/login"]);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(fr), A(me));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })();
      const bO = [
        { path: "", component: pO, canActivate: [ho] },
        { path: "book/:id", component: dO, canActivate: [ho] },
        { path: "admin", component: cO, canActivate: [ho] },
        { path: "feedback", component: gO, canActivate: [ho] },
        { path: "feedbacks", component: yO, canActivate: [ho] },
        { path: "login", component: _O },
        { path: "register", component: CO },
      ];
      let wO = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = nt({ type: e })),
          (e.ɵinj = Ke({ imports: [[sC.forRoot(bO)], sC] })),
          e
        );
      })();
      const EO = function () {
          return ["/admin"];
        },
        MO = function () {
          return ["/feedbacks"];
        },
        AO = function () {
          return ["/feedback"];
        };
      function SO(e, t) {
        if (1 & e) {
          const n = (function Ig() {
            return D();
          })();
          y(0, "nav", 1)(1, "div", 2)(2, "a", 3),
            w(3, "BookStore"),
            _(),
            y(4, "button", 4),
            Zt(5, "span", 5),
            _(),
            y(6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9),
            w(10, "Home"),
            _()(),
            y(11, "li", 8)(12, "a", 10),
            w(13, "Admin"),
            _()(),
            y(14, "li", 8)(15, "a", 10),
            w(16, "feedbacks"),
            _()(),
            y(17, "li", 8)(18, "a", 11),
            w(19, "submit feedback"),
            _()()(),
            y(20, "span"),
            w(21),
            _(),
            y(22, "span", 12),
            V("click", function () {
              return (
                (function Uf(e) {
                  return (k.lFrame.contextLView = e), e[8];
                })(n),
                Nu().signOut()
              );
            }),
            w(23, " logout "),
            _()()()();
        }
        if (2 & e) {
          const n = Nu();
          I(12),
            G("routerLink", eo(6, EO))("hidden", !n.isAdmin),
            I(3),
            G("routerLink", eo(7, MO))("hidden", !n.isAdmin),
            I(3),
            G("routerLink", eo(8, AO)),
            I(3),
            Yn("Welcome ", n.username, "\xa0|\xa0");
        }
      }
      let IO = (() => {
          class e {
            constructor(n) {
              (this.authservice = n),
                (this.isAdmin = !1),
                (this.username = ""),
                (this.isLoggedIn = !1);
            }
            ngOnInit() {
              (this.isLoggedIn = this.authservice.loggedIn()),
                localStorage.getItem("user") &&
                  ((this.username = JSON.parse(
                    localStorage.getItem("user")
                  ).username),
                  (this.isAdmin = JSON.parse(
                    localStorage.getItem("user")
                  ).isAdmin));
            }
            signOut() {
              this.authservice.logoutUser(),
                (this.isLoggedIn = !1),
                localStorage.removeItem("user");
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(fr));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-nav"]],
              decls: 1,
              vars: 1,
              consts: [
                ["class", "navbar navbar-expand-lg bg-dark", 4, "ngIf"],
                [1, "navbar", "navbar-expand-lg", "bg-dark"],
                [1, "container-fluid"],
                ["href", "#", 1, "navbar-brand"],
                [
                  "type",
                  "button",
                  "data-bs-toggle",
                  "collapse",
                  "data-bs-target",
                  "#navbarScroll",
                  "aria-controls",
                  "navbarScroll",
                  "aria-expanded",
                  "false",
                  "aria-label",
                  "Toggle navigation",
                  1,
                  "navbar-toggler",
                ],
                [1, "navbar-toggler-icon"],
                ["id", "navbarScroll", 1, "collapse", "navbar-collapse"],
                [
                  1,
                  "navbar-nav",
                  "me-auto",
                  "my-2",
                  "my-lg-0",
                  "navbar-nav-scroll",
                  2,
                  "--bs-scroll-height",
                  "100px",
                ],
                [1, "nav-item"],
                ["aria-current", "page", "href", "/", 1, "nav-link"],
                [1, "nav-link", 3, "routerLink", "hidden"],
                [1, "nav-link", 3, "routerLink"],
                ["type", "submit", 3, "click"],
              ],
              template: function (n, r) {
                1 & n && Nt(0, SO, 24, 9, "nav", 0),
                  2 & n && G("ngIf", r.isLoggedIn);
              },
              directives: [kc, xa],
              styles: [
                ".navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{color:#f5f5f5}",
              ],
            })),
            e
          );
        })(),
        TO = (() => {
          class e {
            constructor(n, r) {
              (this.authservice = n), (this.router = r);
            }
            ngOnInit() {
              console.log("executed");
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(v(fr), v(me));
            }),
            (e.ɵcmp = pt({
              type: e,
              selectors: [["app-root"]],
              decls: 2,
              vars: 0,
              template: function (n, r) {
                1 & n && Zt(0, "app-nav")(1, "router-outlet");
              },
              directives: [IO, Od],
              styles: [""],
            })),
            e
          );
        })(),
        xO = (() => {
          class e {
            constructor(n) {
              this.authservice = n;
            }
            intercept(n, r) {
              let o = n.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authservice.getToken()}`,
                },
              });
              return r.handle(o);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(A(fr));
            }),
            (e.ɵprov = N({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })(),
        FO = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = nt({ type: e, bootstrap: [TO] })),
            (e.ɵinj = Ke({
              providers: [Fa, ho, { provide: Jc, useClass: xO, multi: !0 }],
              imports: [[f1, wO, P1, HF, $F]],
            })),
            e
          );
        })();
      (function JI() {
        Qy = !1;
      })(),
        c1()
          .bootstrapModule(FO)
          .catch((e) => console.error(e));
    },
  },
  (ie) => {
    ie((ie.s = 338));
  },
]);
