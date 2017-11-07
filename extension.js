const MessageTray = imports.ui.messageTray;

let oldDestroy;

function _destroy(reason) {
  if (reason != 3) {
    oldDestroy.call(this);
  }
}

function init() {
  oldDestroy = MessageTray.Notification.prototype.destroy;
}

function enable() {
  MessageTray.Notification.prototype.destroy = _destroy;
}

function disable() {
  MessageTray.Notification.prototype.destroy = oldDestroy;
}
