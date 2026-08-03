/* @ds-bundle: {"format":4,"namespace":"AviCoreDesignSystem_de3db9","components":[{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StatCard","sourcePath":"components/display/StatCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"PageHeader","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data/DataTable.jsx":"5b79e895013a","components/display/Badge.jsx":"a7fa4efc2a8f","components/display/Card.jsx":"9d3f0e2189f1","components/display/StatCard.jsx":"d70cd643a4dd","components/display/Tag.jsx":"b92daed7a183","components/feedback/Dialog.jsx":"ab0a55de7f52","components/feedback/Toast.jsx":"4368229ab65d","components/feedback/Tooltip.jsx":"22d0cdbb09de","components/forms/Button.jsx":"6805d1f14f23","components/forms/Checkbox.jsx":"54dc8c54cdf1","components/forms/IconButton.jsx":"9419cc345da0","components/forms/Input.jsx":"15c6b6508717","components/forms/Radio.jsx":"8f5be491b76d","components/forms/Select.jsx":"ce48fdf5fb84","components/forms/Switch.jsx":"ff097200f5d6","components/navigation/PageHeader.jsx":"0898886f2741","components/navigation/Sidebar.jsx":"ddcaa9402cc4","components/navigation/Tabs.jsx":"6e9242cb9291","prototype/tif-avicore/ios-frame.jsx":"be3343be4b51","prototype/tif-avicore/modules-registry.js":"0aa8291702b8","ui_kits/erp/ComplianceScreen.jsx":"2cc6b318405c","ui_kits/erp/DashboardScreen.jsx":"65d28c1f9e9e","ui_kits/erp/ExecutiveDashboard.jsx":"ef460ea9162e","ui_kits/erp/OperationsScreen.jsx":"da6697a5b0f1","ui_kits/erp/ScheduleScreen.jsx":"8cc7b8adacf6","ui_kits/erp/StudentProgressScreen.jsx":"22e555c1bd6e","ui_kits/erp/StudentsScreen.jsx":"bc09088b5cf8","ui_kits/erp/shared.jsx":"9a575f925855"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AviCoreDesignSystem_de3db9 = window.AviCoreDesignSystem_de3db9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  rowKey,
  onRowClick,
  dense,
  emptyText = "No records",
  style
}) {
  const key = rowKey || ((r, i) => i);
  const cellPad = dense ? "8px 12px" : "11px 12px";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.id,
    style: {
      textAlign: c.align || "left",
      padding: cellPad,
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      borderBottom: "1px solid var(--border-default)",
      background: "var(--slate-050)",
      whiteSpace: "nowrap",
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: "24px 12px",
      textAlign: "center",
      color: "var(--text-faint)"
    }
  }, emptyText)), rows.map((row, i) => /*#__PURE__*/React.createElement(TableRow, {
    key: key(row, i),
    row: row,
    columns: columns,
    cellPad: cellPad,
    onClick: onRowClick ? () => onRowClick(row) : undefined
  })))));
}
function TableRow({
  row,
  columns,
  cellPad,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onClick ? "pointer" : "default",
      background: hover && onClick ? "var(--navy-050)" : "transparent",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.id,
    style: {
      padding: cellPad,
      textAlign: c.align || "left",
      borderBottom: "1px solid var(--border-default)",
      color: "var(--text-body)",
      fontFamily: c.mono ? "var(--font-mono)" : undefined,
      whiteSpace: c.nowrap ? "nowrap" : undefined
    }
  }, c.render ? c.render(row) : row[c.id])));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const tones = {
  success: {
    background: "var(--status-success-bg)",
    color: "var(--status-success-fg)"
  },
  warning: {
    background: "var(--status-warning-bg)",
    color: "var(--status-warning-fg)"
  },
  danger: {
    background: "var(--status-danger-bg)",
    color: "var(--status-danger-fg)"
  },
  info: {
    background: "var(--status-info-bg)",
    color: "var(--status-info-fg)"
  },
  neutral: {
    background: "var(--status-neutral-bg)",
    color: "var(--status-neutral-fg)"
  }
};
function Badge({
  tone = "neutral",
  dot,
  children,
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      font: "var(--type-overline)",
      letterSpacing: "0.02em",
      padding: "3px 8px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  title,
  actions,
  padding = "var(--space-5)",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "12px var(--space-5)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-section-title)",
      color: "var(--text-heading)"
    }
  }, title), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  unit,
  delta,
  deltaTone = "neutral",
  footer,
  style
}) {
  const deltaColor = {
    positive: "var(--status-success-fg)",
    negative: "var(--status-danger-fg)",
    neutral: "var(--text-muted)"
  }[deltaTone] || "var(--text-muted)";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-4) var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-stat)",
      color: "var(--text-heading)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: deltaColor,
      marginLeft: "auto"
    }
  }, delta)), footer && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, footer));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  onRemove,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      padding: "3px 8px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-sunken)",
      border: "1px solid var(--border-default)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-faint)",
      fontSize: 12,
      lineHeight: 1,
      display: "inline-flex"
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toastTones = {
  success: "var(--status-success-fg)",
  danger: "var(--status-danger-fg)",
  info: "var(--sky-600)",
  neutral: "var(--slate-500)"
};
function Toast({
  tone = "neutral",
  title,
  onDismiss,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      width: 340,
      padding: "12px 14px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-raised)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      marginTop: 5,
      flexShrink: 0,
      background: toastTones[tone] || toastTones.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-faint)",
      fontSize: 12,
      lineHeight: 1,
      padding: 2
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = "top",
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 50,
      whiteSpace: "nowrap",
      background: "var(--slate-900)",
      color: "#fff",
      font: "var(--type-body-sm)",
      padding: "5px 9px",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-raised)",
      pointerEvents: "none"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: "var(--control-height-sm)",
    padding: "0 10px",
    font: "var(--type-label)"
  },
  md: {
    height: "var(--control-height)",
    padding: "0 14px",
    font: "var(--weight-medium) var(--text-base)/1 var(--font-sans)"
  }
};
const variants = {
  primary: {
    background: "var(--surface-brand)",
    color: "var(--text-on-brand)",
    border: "1px solid var(--surface-brand)"
  },
  secondary: {
    background: "var(--surface-card)",
    color: "var(--text-heading)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid transparent"
  },
  danger: {
    background: "var(--red-600)",
    color: "#fff",
    border: "1px solid var(--red-600)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const hoverBg = {
    primary: "var(--surface-brand-hover)",
    secondary: "var(--slate-050)",
    ghost: "var(--slate-100)",
    danger: "#A82A21"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "default" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      ...v,
      ...s,
      background: hover && !disabled ? hoverBg : v.background,
      ...style
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  footer,
  width = 440,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(12,18,48,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "calc(100vw - 48px)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-overlay)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px var(--space-5)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-section-title)",
      color: "var(--text-heading)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-faint)",
      fontSize: 14,
      lineHeight: 1,
      padding: 4
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "12px var(--space-5)",
      borderTop: "1px solid var(--border-default)"
    }
  }, footer)));
}
Dialog.DefaultFooter = function DialogDefaultFooter({
  onCancel,
  onConfirm,
  confirmLabel = "Confirm",
  danger
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: danger ? "danger" : "primary",
    onClick: onConfirm
  }, confirmLabel));
};
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      font: "var(--type-body)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      margin: 0,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${checked ? "var(--surface-brand)" : "var(--border-strong)"}`,
      background: checked ? "var(--surface-brand)" : "var(--surface-card)",
      cursor: "inherit",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }), checked && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "16",
    height: "16",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 8.5 6.8 11 12 5.5",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = "md",
  variant = "ghost",
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === "sm" ? "var(--control-height-sm)" : "var(--control-height)";
  const base = variant === "secondary" ? {
    background: "var(--surface-card)",
    border: "1px solid var(--border-strong)"
  } : {
    background: "transparent",
    border: "1px solid transparent"
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      color: "var(--text-muted)",
      cursor: disabled ? "default" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      opacity: disabled ? 0.5 : 1,
      ...base,
      background: hover && !disabled ? "var(--slate-100)" : base.background,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  helper,
  error,
  prefix,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      font: "var(--type-label)",
      color: "var(--text-heading)",
      ...style
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: "var(--control-height)",
      padding: "0 10px",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--red-600)" : focus ? "var(--border-focus)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      border: "none",
      outline: "none",
      flex: 1,
      minWidth: 0,
      font: "var(--type-body)",
      color: "var(--text-body)",
      background: "transparent",
      ...inputStyle
    }
  }))), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontWeight: 400,
      color: error ? "var(--red-600)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled,
  name,
  value,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      font: "var(--type-body)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      margin: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: checked ? "5px solid var(--surface-brand)" : "1px solid var(--border-strong)",
      background: "var(--surface-card)",
      cursor: "inherit",
      transition: "border var(--duration-fast) var(--ease-standard)"
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  helper,
  error,
  options = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      font: "var(--type-label)",
      color: "var(--text-heading)",
      ...style
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "var(--control-height)",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--red-600)" : focus ? "var(--border-focus)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      border: "none",
      outline: "none",
      width: "100%",
      height: "100%",
      padding: "0 28px 0 10px",
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 10,
      pointerEvents: "none",
      color: "var(--text-faint)",
      fontSize: 11
    }
  }, "\u25BE")), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontWeight: 400,
      color: error ? "var(--red-600)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      font: "var(--type-body)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": !!checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 32,
      height: 18,
      borderRadius: "var(--radius-full)",
      padding: 2,
      background: checked ? "var(--surface-brand)" : "var(--slate-300)",
      transition: "background var(--duration-normal) var(--ease-standard)",
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "#fff",
      transform: checked ? "translateX(14px)" : "translateX(0)",
      transition: "transform var(--duration-normal) var(--ease-standard)",
      boxShadow: "0 1px 2px rgba(19,28,70,.2)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeader.jsx
try { (() => {
function PageHeader({
  overline,
  title,
  meta,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      padding: "var(--space-5) 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, overline && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, overline), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-page-title)",
      color: "var(--text-heading)"
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, meta)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexShrink: 0
    }
  }, actions));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  sections = [],
  active,
  onNavigate,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: "var(--sidebar-width)",
      minHeight: "100%",
      background: "var(--surface-sidebar)",
      display: "flex",
      flexDirection: "column",
      padding: "var(--space-4) var(--space-3)",
      boxSizing: "border-box",
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 10px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) 19px/1.2 var(--font-sans)",
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "AviCore"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-on-sidebar)",
      opacity: 0.7
    }
  }, "Aviation Training ERP")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      flex: 1,
      overflowY: "auto"
    }
  }, sections.map((section, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, section.label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-on-sidebar)",
      opacity: 0.55,
      padding: "0 10px 4px"
    }
  }, section.label), (section.items || []).map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item.id);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none",
        padding: "7px 10px",
        borderRadius: "var(--radius-md)",
        font: "var(--type-label)",
        color: isActive ? "var(--text-on-sidebar-active)" : "var(--text-on-sidebar)",
        background: isActive ? "var(--surface-sidebar-active)" : "transparent",
        transition: "background var(--duration-fast) var(--ease-standard)"
      }
    }, item.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 18,
        justifyContent: "center"
      }
    }, item.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-overline)",
        padding: "1px 6px",
        borderRadius: "var(--radius-full)",
        background: "var(--red-600)",
        color: "#fff"
      }
    }, item.badge));
  })))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-default)",
      ...style
    }
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      id: t,
      label: t
    } : t;
    const isActive = tab.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(tab.id),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: "9px 12px",
        marginBottom: -1,
        font: "var(--type-label)",
        color: isActive ? "var(--navy-700)" : "var(--text-muted)",
        borderBottom: `2px solid ${isActive ? "var(--navy-700)" : "transparent"}`,
        transition: "color var(--duration-fast) var(--ease-standard)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, tab.label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-overline)",
        padding: "1px 6px",
        borderRadius: "var(--radius-full)",
        background: isActive ? "var(--navy-050)" : "var(--slate-100)",
        color: isActive ? "var(--navy-700)" : "var(--text-muted)"
      }
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// prototype/tif-avicore/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototype/tif-avicore/ios-frame.jsx", error: String((e && e.message) || e) }); }

// prototype/tif-avicore/modules-registry.js
try { (() => {
/* TIF AviCore — System Map registry
   40 modules · 29 logical schemas · one shared PostgreSQL database.
   Synthesised from docs/final (architecture, schema, api-permission, workflow-notification-report).
   Loaded synchronously in <head> so the DC logic can read window.TIF_* at first render. */
(function () {
  /* ---- 29 schemas → tables (docs/final/02-database-schema.md) ---- */
  var SCHEMAS = {
    core: ['companies', 'branches', 'departments', 'divisions', 'sections', 'position_types', 'positions', 'reporting_lines', 'job_descriptions', 'authority_levels', 'employees', 'employee_contacts', 'employee_contracts', 'employee_status_history', 'users', 'roles', 'permissions', 'user_roles', 'role_permissions', 'approval_workflows', 'approval_workflow_steps', 'approval_requests', 'approval_steps', 'approval_comments', 'document_types', 'documents', 'document_versions', 'document_access_logs', 'document_approvals', 'notification_templates', 'notifications', 'notification_preferences', 'audit_logs', 'login_logs', 'sensitive_data_access_logs', 'export_logs', 'system_settings', 'numbering_series', 'status_master', 'module_settings'],
    asset: ['assets', 'aircraft', 'simulators', 'stock_items', 'stock_movements', 'asset_assignments'],
    executive: ['am_decisions', 'management_reviews', 'management_review_actions', 'corrective_action_instructions', 'policy_announcements'],
    secretary: ['meetings', 'meeting_attendees', 'meeting_agenda_items', 'meeting_minutes', 'task_assignments', 'executive_memos', 'announcements', 'correspondences'],
    hr: ['recruitment_requests', 'candidates', 'onboarding_checklists', 'onboarding_checklist_items', 'attendance_records', 'leave_types', 'leave_requests', 'leave_balances', 'payroll_periods', 'payroll_inputs', 'probation_evaluations', 'performance_reviews', 'hr_training_records', 'employee_qualifications', 'offboarding_records'],
    it: ['account_tasks', 'access_requests', 'access_reviews', 'support_tickets', 'it_asset_details', 'it_asset_assignments', 'maintenance_logs', 'backup_records', 'security_incidents'],
    facility: ['buildings', 'rooms', 'room_bookings', 'maintenance_requests', 'inspection_templates', 'facility_inspections', 'service_providers', 'provider_evaluations'],
    bd: ['partners', 'partner_contacts', 'partner_interactions', 'mou_records', 'opportunities', 'proposals', 'projects', 'project_milestones'],
    consultant: ['consultants', 'consultant_agreements', 'scopes_of_work', 'advisory_notes', 'recommendations', 'recommendation_actions', 'consultant_reports'],
    coo: ['coo_decisions', 'disruption_records'],
    maintenance: ['aircraft_status', 'maintenance_requirements', 'aircraft_requirement_status', 'maintenance_plans', 'defect_reports', 'work_orders', 'maintenance_releases', 'certifying_authorizations', 'certification_records', 'aircraft_blocked_periods', 'plan_part_requirements'],
    operations: ['operation_slots', 'daily_restrictions', 'dispatch_records', 'flight_logs', 'simulator_logs', 'delay_records', 'cancellation_records', 'schedule_conflicts', 'operation_remarks', 'simulator_status', 'simulator_downtimes'],
    cto: ['cto_decisions', 'training_quality_actions', 'standardization_instructions'],
    standards: ['standard_checklists', 'instructor_qualifications', 'standardization_checks', 'course_standard_approvals', 'lesson_plan_reviews', 'material_reviews', 'training_quality_findings', 'corrective_training_recommendations', 'course_proposals', 'course_revision_requests', 'manual_revisions', 'caat_submission_packages'],
    training: ['courses', 'subjects', 'syllabus_items', 'lesson_plans', 'enrollments', 'training_records', 'classes', 'class_attendance', 'document_checklists', 'completion_records', 'coordination_logs', 'training_issues', 'conduct_checks', 'conduct_findings', 'student_conduct_cases', 'training_plans', 'lesson_demands', 'resource_projections'],
    student: ['students', 'course_progress', 'registrations', 'student_credentials', 'exam_records', 'caat_submissions'],
    cco: ['cco_decisions', 'sales_targets', 'price_packages'],
    sales: ['leads', 'sales_activities', 'quotations', 'applications'],
    marketing: ['campaigns', 'campaign_channels', 'channels', 'content_items', 'events', 'event_registrations'],
    cfo: ['cfo_decisions', 'budgets', 'budget_lines'],
    finance: ['invoices', 'receipts', 'payments', 'expenses', 'credit_notes', 'payroll_runs', 'payroll_payment_records', 'financial_transactions'],
    purchasing: ['purchase_requests', 'vendors', 'rfqs', 'supplier_quotations', 'purchase_orders', 'goods_receipts'],
    cbo: ['cbo_decisions', 'assurance_reviews', 'management_assurance_notes'],
    assurance: ['assurance_plans', 'assurance_engagements', 'assurance_findings', 'effectiveness_checks'],
    risk: ['risks', 'risk_assessments', 'mitigation_plans', 'risk_acceptance_requests', 'loss_events'],
    improvement: ['process_definitions', 'improvement_issues', 'improvement_requests', 'improvement_actions', 'effectiveness_results', 'sop_revisions'],
    scm: ['scm_reviews', 'scm_decisions'],
    safety: ['safety_reports', 'hazards', 'occurrences', 'safety_risk_assessments', 'safety_actions', 'safety_meetings', 'safety_bulletins'],
    compliance: ['monitoring_programmes', 'audit_checklists', 'compliance_audits', 'findings', 'regulatory_requirements', 'regulatory_positions']
  };

  /* ---- shared services at the Core (docs/final/01 §1.4) ---- */
  var SERVICES = [{
    n: 'AuthService',
    s: 'core',
    d: 'JWT · session · lock'
  }, {
    n: 'UserService',
    s: 'core',
    d: 'users / roles · can(user, perm)'
  }, {
    n: 'EmployeeService',
    s: 'core',
    d: 'employee CRUD · line manager'
  }, {
    n: 'OrgService',
    s: 'core',
    d: 'tree · positions · authority levels'
  }, {
    n: 'ApprovalService',
    s: 'core',
    d: 'submit / approve / reject · inbox'
  }, {
    n: 'DocumentService',
    s: 'core',
    d: 'attach · version · expiry scan'
  }, {
    n: 'NotificationService',
    s: 'core',
    d: 'notify / broadcast · templates'
  }, {
    n: 'AuditLogService',
    s: 'core',
    d: 'before / after log · every write'
  }, {
    n: 'NumberingService',
    s: 'core',
    d: 'atomic document numbers'
  }, {
    n: 'BudgetService',
    s: 'cfo',
    d: 'check / commit / actual per line'
  }, {
    n: 'ValidityService',
    s: 'standards + student + maintenance',
    d: 'canInstruct · canCertify · credential valid'
  }, {
    n: 'CapacityService',
    s: 'training',
    d: 'resource projections · intake'
  }];

  /* ---- group definitions (accents drawn from AviCore token palette) ---- */
  var ORG_GROUPS = [{
    id: 'exec',
    label: 'Executive / Accountable Manager',
    accent: '#22307A'
  }, {
    id: 'support',
    label: 'Corporate Support',
    accent: '#647087'
  }, {
    id: 'coo',
    label: 'COO — Operations & Maintenance',
    accent: '#0E6FBE'
  }, {
    id: 'cto',
    label: 'CTO — Training & Standards',
    accent: '#2E3F97'
  }, {
    id: 'cco',
    label: 'CCO — Commercial',
    accent: '#3E52B4'
  }, {
    id: 'cfo',
    label: 'CFO — Finance',
    accent: '#1E7F46'
  }, {
    id: 'cbo',
    label: 'CBO — Business Assurance',
    accent: '#333B4E'
  }, {
    id: 'scm',
    label: 'SCM — Safety & Compliance',
    accent: '#C0362C'
  }, {
    id: 'shared',
    label: 'Shared Registry',
    accent: '#8792A6'
  }];
  var DOM_GROUPS = [{
    id: 'train',
    label: 'Training & Standards',
    accent: '#2E3F97'
  }, {
    id: 'ops',
    label: 'Flight & Sim Operations',
    accent: '#0E6FBE'
  }, {
    id: 'maint',
    label: 'Maintenance & Fleet',
    accent: '#9A6700'
  }, {
    id: 'comm',
    label: 'Commercial',
    accent: '#3E52B4'
  }, {
    id: 'fin',
    label: 'Finance & Procurement',
    accent: '#1E7F46'
  }, {
    id: 'safety',
    label: 'Safety & Compliance',
    accent: '#C0362C'
  }, {
    id: 'assure',
    label: 'Assurance & Risk',
    accent: '#333B4E'
  }, {
    id: 'corp',
    label: 'Corporate & Support',
    accent: '#647087'
  }];

  /* ---- 40 modules ---- */
  var M = [{
    id: 'ceo-am',
    code: 'CEO',
    name: 'CEO / Accountable Manager',
    schema: 'executive',
    org: 'exec',
    dom: 'corp',
    oversight: true,
    built: 'dashboard',
    deps: ['secretary', 'hr', 'coo', 'cto', 'cco', 'cfo', 'cbo', 'scm'],
    serves: ['coo', 'cto', 'cco', 'cfo', 'cbo', 'scm', 'hr'],
    perms: ['executive.dashboard.view', 'executive.decision.manage', 'executive.review.manage', 'executive.instruction.issue'],
    flows: ['Final approver — invoice / regulatory / postholder', 'bd.proposal → cfo → ceo_am', 'purchasing.pr → ceo (by limit)'],
    notifs: ['Approval pending (executive step)', 'Regulatory expiry ≤ 30 days', 'Regulatory finding (level 1)', 'Security incident ≥ high', 'Regulatory position vacant / at-risk'],
    reports: ['CEO Dashboard', 'AM Compliance Dashboard', 'Pending Executive Approval', 'Management Review', 'Organization Risk Summary']
  }, {
    id: 'secretary',
    code: 'SEC',
    name: 'Secretary Office',
    schema: 'secretary',
    org: 'support',
    dom: 'corp',
    built: null,
    deps: ['ceo-am'],
    serves: ['ceo-am', 'hr', 'coo', 'cto', 'cco', 'cfo', 'cbo', 'scm'],
    perms: ['secretary.meeting.manage', 'secretary.task.assign', 'secretary.memo.manage', 'secretary.correspondence.manage'],
    flows: ['— supports executive workflow (no separate approval)'],
    notifs: ['Task assigned / due', 'Meeting scheduled'],
    reports: ['Meeting Minutes', 'Task Status', 'Correspondence Log']
  }, {
    id: 'hr',
    code: 'HR',
    name: 'Human Resource',
    schema: 'hr',
    org: 'support',
    dom: 'corp',
    built: 'hr',
    deps: ['finance-accounting', 'standards'],
    serves: ['it', 'finance-accounting', 'ceo-am'],
    perms: ['hr.leave.approve', 'hr.recruitment.manage', 'hr.payroll.manage', 'hr.qualification.manage', 'hr.attendance.manage'],
    flows: ['hr.recruitment — line_manager → hr_admin', 'hr.leave — line_manager → hr_admin', 'hr.payroll_input — hr_admin → cfo', 'hr.probation — evaluator → head → hr', 'hr.resignation — line_manager → hr → ceo_am*'],
    notifs: ['Approval pending (leave / recruitment)', 'Contract / probation due'],
    reports: ['Headcount', 'Leave', 'Attendance', 'Probation', 'Contract Expiry', 'Turnover', 'HR Cost']
  }, {
    id: 'it',
    code: 'IT',
    name: 'Information Technology',
    schema: 'it',
    org: 'support',
    dom: 'corp',
    built: null,
    deps: ['hr', 'asset'],
    serves: ['hr', 'asset', 'facilities', 'ceo-am'],
    perms: ['it.ticket.manage', 'it.access.request', 'it.access.review', 'it.asset.manage', 'it.backup.view'],
    flows: ['it.access_request — line_manager → module_admin → it'],
    notifs: ['Backup failed', 'Security incident ≥ high'],
    reports: ['Ticket', 'User Access', 'Account Status', 'IT Asset', 'Security Incident']
  }, {
    id: 'facilities',
    code: 'FAC',
    name: 'Facilities Management',
    schema: 'facility',
    org: 'support',
    dom: 'corp',
    built: null,
    deps: ['purchasing'],
    serves: ['training-admin', 'secretary', 'marketing'],
    perms: ['facility.room.book', 'facility.maintenance.request', 'facility.inspection.perform', 'facility.provider.manage'],
    flows: ['facility.maintenance_request — requester → facility_admin'],
    notifs: ['Room booking conflict', 'Inspection due'],
    reports: ['Classroom Usage', 'Facility Maintenance', 'Readiness', 'Room Booking']
  }, {
    id: 'bd',
    code: 'BD',
    name: 'Business Development',
    schema: 'bd',
    org: 'support',
    dom: 'corp',
    built: null,
    deps: ['training-admin', 'finance-accounting'],
    serves: ['sale', 'ceo-am'],
    perms: ['bd.partner.manage', 'bd.mou.manage', 'bd.opportunity.manage', 'bd.proposal.manage'],
    flows: ['bd.mou — bd → cfo* → ceo_am', 'bd.proposal — bd → cfo* → ceo_am'],
    notifs: ['Approval pending (MOU / proposal)', 'Milestone due'],
    reports: ['Partner', 'Opportunity', 'Proposal', 'Project Milestone']
  }, {
    id: 'consultant',
    code: 'CON',
    name: 'Consultant',
    schema: 'consultant',
    org: 'support',
    dom: 'corp',
    built: null,
    deps: ['compliance-monitoring', 'bd'],
    serves: ['ceo-am', 'cbo'],
    perms: ['consultant.agreement.manage', 'consultant.recommendation.manage', 'consultant.report.view'],
    flows: ['consultant.agreement — dept → cfo → ceo_am'],
    notifs: ['Recommendation action due'],
    reports: ['Advisory Notes', 'Recommendations', 'Consultant Report']
  }, {
    id: 'coo',
    code: 'COO',
    name: 'Chief Operating Officer',
    schema: 'coo',
    org: 'coo',
    dom: 'ops',
    oversight: true,
    built: null,
    deps: ['maintenance', 'operations', 'safety-manager'],
    serves: ['ceo-am'],
    perms: ['coo.dashboard.view', 'coo.decision.manage', 'coo.disruption.manage'],
    flows: ['maintenance.major_deferral — dm → coo', 'operations.external_rental — do → coo', 'maintenance.wo_budget — dm → coo → cfo'],
    notifs: ['AOG / grounding', 'Occurrence serious+ (COO line)'],
    reports: ['Operations Dashboard', 'Disruption']
  }, {
    id: 'maintenance',
    code: 'MX',
    name: 'Maintenance (CAMO)',
    schema: 'maintenance',
    org: 'coo',
    dom: 'maint',
    built: 'fleet',
    deps: ['asset', 'operations'],
    serves: ['operations', 'coo', 'compliance-monitoring', 'finance-accounting'],
    perms: ['maintenance.wo.manage', 'maintenance.release.sign', 'maintenance.defect.manage', 'maintenance.plan.manage', 'maintenance.status.view'],
    flows: ['maintenance.major_deferral — dm → coo', 'maintenance.wo_budget — dm → coo → cfo', 'maintenance.authorization — dm → compliance → dm'],
    notifs: ['AOG / grounding'],
    reports: ['Aircraft Availability', 'Defect', 'Due', 'Downtime', 'Forecast', 'Cost Estimate', 'Certification']
  }, {
    id: 'maintenance-certify-staff',
    code: 'MXC',
    name: 'Maintenance Certify Staff',
    schema: 'maintenance',
    shares: true,
    org: 'coo',
    dom: 'maint',
    built: 'fleet',
    deps: ['compliance-monitoring', 'standards'],
    serves: ['maintenance', 'operations', 'compliance-monitoring'],
    perms: ['maintenance.certstaff.manage', 'maintenance.certify.sign'],
    flows: ['maintenance.authorization — dm → compliance → dm'],
    notifs: ['Authorization expiry ≤ 30 days'],
    reports: ['Certifying Staff List', 'Authorization Validity', 'Certification']
  }, {
    id: 'maintenance-planning',
    code: 'MXP',
    name: 'Maintenance Planning',
    schema: 'maintenance',
    shares: true,
    org: 'coo',
    dom: 'maint',
    built: 'fleet',
    deps: ['asset', 'purchasing', 'operations'],
    serves: ['maintenance', 'operations'],
    perms: ['maintenance.plan.manage', 'maintenance.plan.defer'],
    flows: ['maintenance.major_deferral — dm → coo'],
    notifs: ['Maintenance due soon', 'Spare shortage'],
    reports: ['Planning', 'Due', 'Forecast', 'Block Schedule', 'Spare Requirement']
  }, {
    id: 'operations',
    code: 'OPS',
    name: 'Operations',
    schema: 'operations',
    org: 'coo',
    dom: 'ops',
    built: 'schedule',
    deps: ['maintenance', 'training-admin', 'standards', 'training-registration-licensing'],
    serves: ['maintenance', 'training-admin', 'finance-accounting', 'safety-manager'],
    perms: ['ops.schedule.manage', 'ops.dispatch.release', 'ops.dispatch.override', 'ops.log.adjust', 'ops.sim.manage'],
    flows: ['operations.log_adjustment — requester → do', 'operations.external_rental — do → coo'],
    notifs: ['AOG / grounding', 'Divert / air return / dispatch override'],
    reports: ['Daily Operation', 'Flight Schedule', 'Dispatch', 'Cancellation', 'Utilization', 'Conflict', 'Instructor Load']
  }, {
    id: 'operation-scheduler',
    code: 'SCH',
    name: 'Operation Scheduler',
    schema: 'operations',
    shares: true,
    org: 'coo',
    dom: 'ops',
    built: 'schedule',
    deps: ['training-admin', 'maintenance', 'standards'],
    serves: ['operations', 'operation-dispatch'],
    perms: ['ops.schedule.view', 'ops.schedule.manage'],
    flows: ['— schedules within operations workflow'],
    notifs: ['Schedule conflict', 'Tomorrow schedule (optional)'],
    reports: ['Flight Schedule', 'Conflict', 'Instructor Load', 'Aircraft Booking']
  }, {
    id: 'operation-dispatch',
    code: 'DSP',
    name: 'Operation Dispatch',
    schema: 'operations',
    shares: true,
    org: 'coo',
    dom: 'ops',
    built: 'schedule',
    deps: ['operations', 'maintenance', 'safety-manager'],
    serves: ['operations', 'finance-accounting', 'safety-manager'],
    perms: ['ops.dispatch.release', 'ops.dispatch.override', 'ops.log.adjust'],
    flows: ['operations.log_adjustment — requester → do'],
    notifs: ['Divert / air return / dispatch override', 'AOG / grounding'],
    reports: ['Dispatch', 'Cancellation', 'Daily Operation']
  }, {
    id: 'simulator-coordinator',
    code: 'SIM',
    name: 'Simulator Coordinator',
    schema: 'operations',
    shares: true,
    org: 'coo',
    dom: 'ops',
    built: 'schedule',
    deps: ['asset', 'training-admin'],
    serves: ['operations', 'training-admin'],
    perms: ['ops.sim.manage', 'ops.sim.schedule'],
    flows: ['— schedules FSTD within operations workflow'],
    notifs: ['Simulator downtime'],
    reports: ['Sim Utilization', 'Sim Downtime', 'Sim Session']
  }, {
    id: 'cto',
    code: 'CTO',
    name: 'Chief Training Officer',
    schema: 'cto',
    org: 'cto',
    dom: 'train',
    oversight: true,
    built: null,
    deps: ['standards', 'training-admin', 'operations'],
    serves: ['ceo-am'],
    perms: ['cto.dashboard.view', 'cto.decision.manage', 'cto.quality.instruct'],
    flows: ['standards.course_proposal — ds → cto → ceo_am', 'standards.course_approval — reviewer → ds → cto* → ceo_am*', 'training.completion — dt → cto'],
    notifs: ['Training quality exception', 'Approval pending (CTO step)'],
    reports: ['Training Dashboard', 'Course Compliance', 'Standardization', 'Quality']
  }, {
    id: 'standards',
    code: 'STD',
    name: 'Standard Division',
    schema: 'standards',
    org: 'cto',
    dom: 'train',
    built: 'courses',
    deps: ['training-admin', 'operations'],
    serves: ['operations', 'training-admin', 'cto', 'compliance-monitoring'],
    perms: ['standards.course.approve', 'standards.instructor.manage', 'standards.check.perform', 'standards.quality.manage'],
    flows: ['standards.course_proposal — ds → cto → ceo_am', 'standards.course_approval — reviewer → ds → cto*', 'standards.instructor_authorization — staff → ds → cto*', 'standards.manual_revision — ds → cto → ceo_am'],
    notifs: ['Instructor authorization expiry', 'Approval pending (standards)'],
    reports: ['Standardization', 'Student / Instructor Standard', 'Quality', 'Manual Version']
  }, {
    id: 'standard-flight',
    code: 'SF',
    name: 'Standard Flight',
    schema: 'standards',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: null,
    deps: ['training-admin', 'operations'],
    serves: ['standards', 'operations', 'training-admin'],
    perms: ['standards.check.perform', 'standards.review.perform'],
    flows: ['standards.instructor_authorization — staff → ds → cto*'],
    notifs: ['Standardization check due'],
    reports: ['Standardization (Flight)', 'Instructor Standard']
  }, {
    id: 'standard-theory',
    code: 'STH',
    name: 'Standard Theory',
    schema: 'standards',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: null,
    deps: ['training-admin'],
    serves: ['standards', 'training-admin'],
    perms: ['standards.check.perform', 'standards.review.perform'],
    flows: ['standards.syllabus_change — ds → cto → ceo_am*'],
    notifs: ['Material review due'],
    reports: ['Standardization (Theory)', 'Material Review']
  }, {
    id: 'standard-simulators',
    code: 'SSM',
    name: 'Standard Simulators',
    schema: 'standards',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: null,
    deps: ['operations', 'asset'],
    serves: ['standards', 'operations'],
    perms: ['standards.check.perform', 'standards.review.perform'],
    flows: ['standards.instructor_authorization — staff → ds → cto*'],
    notifs: ['FSTD qualification expiry'],
    reports: ['Standardization (Sim)', 'Instructor Standard']
  }, {
    id: 'course-development',
    code: 'CD',
    name: 'Course Development',
    schema: 'standards',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: 'courses',
    deps: ['training-admin', 'standards'],
    serves: ['standards', 'training-admin', 'cto'],
    perms: ['standards.coursedev.manage', 'standards.course.approve'],
    flows: ['standards.course_proposal — ds → cto → ceo_am', 'standards.syllabus_change — ds → cto → ceo_am*'],
    notifs: ['Course revision pending', 'Approval pending (course dev)'],
    reports: ['Course Dev Status', 'Revision History', 'Manual Version']
  }, {
    id: 'training-admin',
    code: 'TRA',
    name: 'Training Admin',
    schema: 'training',
    org: 'cto',
    dom: 'train',
    built: 'students',
    deps: ['standards', 'operations', 'finance-accounting', 'facilities'],
    serves: ['operations', 'finance-accounting', 'compliance-monitoring', 'safety-manager', 'sale'],
    perms: ['training.student.manage', 'training.enrollment.manage', 'training.record.grade', 'training.class.manage'],
    flows: ['training.student_status — training_admin → dt → finance*', 'training.record_adjustment — requester → dt', 'training.completion — dt → cto'],
    notifs: ['Medical / license expiry', 'Approval pending (records)'],
    reports: ['Student List', 'Enrollment', 'Progress', 'Missing Document', 'Completion', 'Attendance', 'Plan vs Actual']
  }, {
    id: 'training-coordinator',
    code: 'TRC',
    name: 'Training Coordinator',
    schema: 'training',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: 'record',
    deps: ['training-admin', 'operations', 'facilities'],
    serves: ['training-admin'],
    perms: ['training.coordination.manage', 'training.class.manage'],
    flows: ['— coordinates within training workflow'],
    notifs: ['Follow-up pending (optional)'],
    reports: ['Coordination', 'Attendance', 'Issue']
  }, {
    id: 'training-compliance-conduct',
    code: 'TCC',
    name: 'Training Compliance & Conduct',
    schema: 'training',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: null,
    deps: ['training-admin', 'standards'],
    serves: ['compliance-monitoring', 'training-admin'],
    perms: ['training.conduct.check', 'training.conduct.manage'],
    flows: ['training.record_adjustment — requester → dt'],
    notifs: ['Conduct finding raised'],
    reports: ['Missing Document', 'Conduct', 'Issue']
  }, {
    id: 'training-planner',
    code: 'TRP',
    name: 'Training Planner',
    schema: 'training',
    shares: true,
    org: 'cto',
    dom: 'train',
    built: 'progress',
    deps: ['training-admin', 'operations', 'standards'],
    serves: ['training-admin', 'cco'],
    perms: ['training.plan.manage'],
    flows: ['training.plan_approval — planner → dt → cto'],
    notifs: ['Plan approval pending'],
    reports: ['Plan vs Actual', 'Forecast Completion', 'Demand']
  }, {
    id: 'training-registration-licensing',
    code: 'REG',
    name: 'Registration & Licensing',
    schema: 'student',
    org: 'cto',
    dom: 'train',
    built: null,
    deps: ['standards', 'sale'],
    serves: ['compliance-monitoring', 'finance-accounting'],
    perms: ['training.registration.manage', 'training.credential.manage', 'training.exam.manage', 'training.submission.manage'],
    flows: ['training.completion — dt → cto (→ licensing + finance)'],
    notifs: ['Medical expiry', 'CAAT submission due'],
    reports: ['Licensing', 'CAAT Submission', 'Medical Expiry', 'Exam / Skill Readiness']
  }, {
    id: 'cco',
    code: 'CCO',
    name: 'Chief Commercial Officer',
    schema: 'cco',
    org: 'cco',
    dom: 'comm',
    oversight: true,
    built: null,
    deps: ['sale', 'marketing', 'finance-accounting', 'training-admin'],
    serves: ['sale', 'finance-accounting'],
    perms: ['cco.dashboard.view', 'cco.decision.manage', 'cco.target.manage', 'cco.package.manage'],
    flows: ['cco.price_package — director → cco → cfo', 'sales.discount_exception — sales → cco', 'marketing.campaign_budget — director → cco → cfo*'],
    notifs: ['Capacity vs demand gap', 'Approval pending (CCO step)'],
    reports: ['Sales / Marketing Dashboard', 'Conversion', 'Revenue Pipeline', 'Application Status']
  }, {
    id: 'sale',
    code: 'SAL',
    name: 'Sale',
    schema: 'sales',
    org: 'cco',
    dom: 'comm',
    built: null,
    deps: ['cco', 'marketing', 'finance-accounting'],
    serves: ['training-registration-licensing', 'finance-accounting'],
    perms: ['sales.lead.manage', 'sales.quotation.manage', 'sales.application.manage'],
    flows: ['sales.discount_exception — sales → cco'],
    notifs: ['Quotation expiring (optional)', 'Lead follow-up (optional)'],
    reports: ['Lead', 'Quotation', 'Follow-up', 'Conversion', 'Application Status']
  }, {
    id: 'marketing',
    code: 'MKT',
    name: 'Marketing',
    schema: 'marketing',
    org: 'cco',
    dom: 'comm',
    built: null,
    deps: ['sale', 'finance-accounting', 'facilities'],
    serves: ['sale', 'cco'],
    perms: ['marketing.campaign.manage', 'marketing.content.manage', 'marketing.event.manage'],
    flows: ['marketing.campaign_budget — director → cco → cfo*'],
    notifs: ['Content pending (optional)'],
    reports: ['Campaign Performance', 'Lead Source', 'ROI', 'Event']
  }, {
    id: 'cfo',
    code: 'CFO',
    name: 'Chief Financial Officer',
    schema: 'cfo',
    org: 'cfo',
    dom: 'fin',
    oversight: true,
    built: null,
    deps: ['finance-accounting', 'purchasing', 'hr'],
    serves: ['finance-accounting', 'purchasing', 'coo', 'cto', 'cco', 'cbo'],
    perms: ['cfo.budget.approve', 'cfo.decision.manage', 'cfo.dashboard.view'],
    flows: ['cfo.budget_approval — cfo → ceo_am', 'cfo.budget_exception — cfo → ceo_am'],
    notifs: ['Budget line over / cash low', 'Loss over threshold'],
    reports: ['Finance Dashboard', 'Cash Flow', 'Revenue', 'Budget Usage']
  }, {
    id: 'finance-accounting',
    code: 'FIN',
    name: 'Finance & Accounting',
    schema: 'finance',
    org: 'cfo',
    dom: 'fin',
    built: null,
    deps: ['hr', 'purchasing', 'sale', 'training-admin'],
    serves: ['cfo', 'training-admin', 'purchasing', 'maintenance'],
    perms: ['finance.invoice.manage', 'finance.receipt.manage', 'finance.payment.manage', 'finance.payroll.run', 'finance.expense.manage'],
    flows: ['finance.invoice_special / refund — finance → cfo', 'finance.payroll_run — finance → cfo'],
    notifs: ['Cash below threshold', 'Approval pending (refund / payroll)'],
    reports: ['Revenue', 'Outstanding', 'Expense', 'Payroll Summary', 'Invoice', 'Receipt', 'Student Payment']
  }, {
    id: 'purchasing',
    code: 'PUR',
    name: 'Purchasing',
    schema: 'purchasing',
    org: 'cfo',
    dom: 'fin',
    built: null,
    deps: ['cfo', 'asset'],
    serves: ['maintenance', 'it', 'facilities', 'finance-accounting'],
    perms: ['purchasing.pr.manage', 'purchasing.po.manage', 'purchasing.vendor.manage', 'purchasing.gr.manage'],
    flows: ['purchasing.pr — head → purchasing → cfo* → ceo*', 'purchasing.po_over_limit — purchasing → cfo → ceo'],
    notifs: ['Approval pending (PR / PO)', 'Goods received'],
    reports: ['PR', 'PO', 'Vendor', 'Budget Usage']
  }, {
    id: 'cbo',
    code: 'CBO',
    name: 'Chief Business Assurance Officer',
    schema: 'cbo',
    org: 'cbo',
    dom: 'assure',
    oversight: true,
    built: null,
    deps: ['assurance-management', 'risk-loss', 'process-improvement'],
    serves: ['ceo-am'],
    perms: ['cbo.decision.manage', 'cbo.review.manage', 'cbo.dashboard.view'],
    flows: ['cbo.improvement_approval — process_owner → cbo → ceo_am*'],
    notifs: ['Security incident ≥ high', 'Loss over threshold', 'Corrective action over 30 days'],
    reports: ['Business Assurance Dashboard', 'Finding Status', 'Risk Summary / Heat Map', 'Loss', 'Process KPI', 'Before / After']
  }, {
    id: 'assurance-management',
    code: 'ASR',
    name: 'Assurance Management',
    schema: 'assurance',
    org: 'cbo',
    dom: 'assure',
    built: null,
    deps: ['process-improvement', 'risk-loss'],
    serves: ['cbo', 'scm', 'process-improvement'],
    perms: ['assurance.plan.manage', 'assurance.engagement.perform', 'assurance.finding.manage'],
    flows: ['assurance.finding → escalated by ref → compliance.findings'],
    notifs: ['Assurance finding raised', 'Effectiveness check due'],
    reports: ['Assurance Plan', 'Finding Status', 'Effectiveness', 'Corrective Action']
  }, {
    id: 'risk-loss',
    code: 'RSK',
    name: 'Risk & Loss Management',
    schema: 'risk',
    org: 'cbo',
    dom: 'assure',
    built: null,
    deps: ['safety-manager', 'finance-accounting'],
    serves: ['cbo', 'ceo-am'],
    perms: ['risk.register.manage', 'risk.assessment.perform', 'risk.mitigation.manage', 'risk.loss.record'],
    flows: ['risk.acceptance — risk_owner → cbo'],
    notifs: ['Loss over threshold', 'Mitigation over 30 days'],
    reports: ['Risk Summary', 'Heat Map', 'Loss']
  }, {
    id: 'process-improvement',
    code: 'PI',
    name: 'Process Improvement',
    schema: 'improvement',
    org: 'cbo',
    dom: 'assure',
    built: null,
    deps: ['assurance-management', 'risk-loss'],
    serves: ['assurance-management', 'hr', 'ceo-am'],
    perms: ['improvement.issue.manage', 'improvement.request.manage', 'improvement.sop.revise'],
    flows: ['improvement.sop_revision — process_owner → cbo', 'cbo.improvement_approval — process_owner → cbo → ceo_am*'],
    notifs: ['SOP / manual new (acknowledge 7 days)'],
    reports: ['Process Improvement', 'Process KPI', 'Before / After', 'Action Plan']
  }, {
    id: 'scm',
    code: 'SCM',
    name: 'Safety & Compliance Monitoring',
    schema: 'scm',
    org: 'scm',
    dom: 'safety',
    oversight: true,
    built: null,
    deps: ['safety-manager', 'compliance-monitoring'],
    serves: ['ceo-am'],
    perms: ['scm.review.perform', 'scm.decision.manage', 'scm.dashboard.view'],
    flows: ['scm.audit_plan — cm_manager → scm', 'independent review step in cross-module workflows'],
    notifs: ['Occurrence serious+', 'Regulatory expiry ≤ 30', 'Regulatory finding', 'Regulatory position at-risk'],
    reports: ['Safety & Compliance Dashboard', 'Audit Status / Plan', 'Finding Register', 'Corrective Due', 'License / Authorization Expiry', 'Monitoring']
  }, {
    id: 'safety-manager',
    code: 'SMS',
    name: 'Safety Manager (SMS)',
    schema: 'safety',
    org: 'scm',
    dom: 'safety',
    built: null,
    deps: ['operations', 'maintenance', 'coo'],
    serves: ['scm', 'risk-loss', 'compliance-monitoring', 'ceo-am'],
    perms: ['safety.report.submit', 'safety.investigate', 'safety.assess', 'safety.manage'],
    flows: ['No approval workflow — mandatory notifications on occurrence'],
    notifs: ['Occurrence serious+ / accident', 'CAAT reportable occurrence', 'Divert / air return'],
    reports: ['Safety Report', 'Hazard Register', 'Occurrence', 'Safety Action', 'Safety KPI']
  }, {
    id: 'compliance-monitoring',
    code: 'CMS',
    name: 'Compliance Monitoring (CMS)',
    schema: 'compliance',
    org: 'scm',
    dom: 'safety',
    built: 'docs',
    deps: ['training-admin', 'maintenance', 'standards', 'training-registration-licensing'],
    serves: ['scm', 'ceo-am', 'standards', 'process-improvement'],
    perms: ['compliance.audit.perform', 'compliance.finding.manage', 'compliance.requirement.manage', 'compliance.programme.manage'],
    flows: ['scm.audit_plan — cm_manager → scm', 'reviews maintenance.authorization'],
    notifs: ['Regulatory expiry ≤ 30 days', 'Regulatory finding (all levels)'],
    reports: ['Audit Status', 'Finding Register', 'License / Authorization Expiry', 'Monitoring', 'Regulatory Position']
  }, {
    id: 'asset',
    code: 'AST',
    name: 'Asset / Inventory',
    schema: 'asset',
    org: 'shared',
    dom: 'maint',
    built: 'stock',
    gap: true,
    deps: ['purchasing'],
    serves: ['maintenance', 'operations', 'it', 'facilities', 'purchasing'],
    perms: ['asset.registry.manage', 'asset.stock.manage', 'asset.assignment.manage'],
    flows: ['— registry updated via GR / WO references (append-only movements)'],
    notifs: ['Stock below minimum', 'CofA expiry (aircraft)'],
    reports: ['Asset Register', 'Stock Level', 'Assignment']
  }];
  window.TIF_SCHEMAS = SCHEMAS;
  window.TIF_SERVICES = SERVICES;
  window.TIF_ORG_GROUPS = ORG_GROUPS;
  window.TIF_DOM_GROUPS = DOM_GROUPS;
  window.TIF_MODULES = M;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototype/tif-avicore/modules-registry.js", error: String((e && e.message) || e) }); }

// ui_kits/erp/ComplianceScreen.jsx
try { (() => {
function ComplianceScreen() {
  const {
    PageHeader,
    Button,
    Card,
    DataTable,
    Badge,
    Tabs,
    StatCard
  } = DS;
  const [tab, setTab] = React.useState("licenses");
  const licenses = [{
    holder: "Capt. Niran Suksawat",
    item: "CFI License",
    ref: "CFI-TH-0921",
    expires: "18 Jul 2026",
    days: "15",
    status: "Due Soon",
    tone: "danger"
  }, {
    holder: "Capt. Preecha Nakornthap",
    item: "Class 1 Medical",
    ref: "MED-1-4471",
    expires: "09 Sep 2026",
    days: "68",
    status: "Active",
    tone: "success"
  }, {
    holder: "HS-TIF · Cessna 172",
    item: "Certificate of Airworthiness",
    ref: "CofA-2210",
    expires: "22 Jul 2026",
    days: "19",
    status: "Due Soon",
    tone: "warning"
  }, {
    holder: "FNPT II Simulator",
    item: "CAAT Device Authorization",
    ref: "FSTD-044",
    expires: "30 Nov 2026",
    days: "150",
    status: "Active",
    tone: "success"
  }, {
    holder: "A. Wichai Somboon",
    item: "Ground Instructor Cert.",
    ref: "GI-TH-0112",
    expires: "12 Jun 2026",
    days: "—",
    status: "Expired",
    tone: "danger"
  }];
  const findings = [{
    id: "FND-2026-014",
    origin: "Escalated · DT",
    desc: "Training records missing instructor sign-off (3 files)",
    raised: "12 Jun 2026",
    due: "15 Aug 2026",
    status: "In Review",
    tone: "info"
  }, {
    id: "FND-2026-011",
    origin: "Internal audit",
    desc: "Simulator session logs not archived per CAAT req. 4.2",
    raised: "28 May 2026",
    due: "28 Jul 2026",
    status: "Pending",
    tone: "warning"
  }, {
    id: "FND-2026-007",
    origin: "Escalated · DS",
    desc: "Fuel record discrepancy — HS-TIG April logs",
    raised: "02 Apr 2026",
    due: "02 Jun 2026",
    status: "Completed",
    tone: "success"
  }];
  // Regulatory position watch (Compliance Monitoring FR-CMM-REQ)
  const positions = [{
    role: "Accountable Manager",
    holder: "Capt. Preecha Nakornthap",
    status: "Filled",
    tone: "success"
  }, {
    role: "Safety Manager",
    holder: "— vacant since 29 Jun 2026",
    status: "Vacant",
    tone: "danger"
  }, {
    role: "Compliance Monitoring Manager",
    holder: "Dr. Anong Kittikul",
    status: "Filled",
    tone: "success"
  }, {
    role: "Director of Maintenance (DM)",
    holder: "Somsak Jaidee",
    status: "Filled",
    tone: "success"
  }, {
    role: "Head of Training (DT)",
    holder: "Capt. Niran S. — CFI expires 18 Jul",
    status: "At Risk",
    tone: "warning"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Compliance Module",
    title: "Compliance & CAAT Tracking",
    meta: "Next CAAT audit: 14 Oct 2026",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "download"
      })
    }, "Audit checklist")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Valid items",
    value: "47",
    footer: "Licenses, certs, authorizations"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Due within 30 days",
    value: "2",
    deltaTone: "negative",
    delta: "action needed"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Expired",
    value: "1",
    deltaTone: "negative",
    delta: "grounding risk"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Open findings",
    value: "2",
    footer: "1 in review \xB7 1 pending"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: "licenses",
      label: "License Validity",
      count: 5
    }, {
      id: "findings",
      label: "Findings & Corrective Actions",
      count: 3
    }, {
      id: "positions",
      label: "Regulatory Positions",
      count: 5
    }],
    active: tab,
    onChange: setTab
  })), tab === "positions" ? /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      id: "role",
      label: "Regulatory Position",
      nowrap: true
    }, {
      id: "holder",
      label: "Incumbent"
    }, {
      id: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }],
    rows: positions,
    rowKey: r => r.role
  }) : tab === "licenses" ? /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      id: "holder",
      label: "Holder / Asset",
      nowrap: true
    }, {
      id: "item",
      label: "Item",
      nowrap: true
    }, {
      id: "ref",
      label: "Reference",
      mono: true
    }, {
      id: "expires",
      label: "Expires",
      mono: true,
      nowrap: true
    }, {
      id: "days",
      label: "Days left",
      mono: true,
      align: "right"
    }, {
      id: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }],
    rows: licenses,
    rowKey: r => r.ref
  }) : /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      id: "id",
      label: "Finding",
      mono: true,
      width: 130
    }, {
      id: "origin",
      label: "Origin / Layer",
      nowrap: true,
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, r.origin)
    }, {
      id: "desc",
      label: "Description"
    }, {
      id: "due",
      label: "Action due",
      mono: true,
      nowrap: true
    }, {
      id: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }],
    rows: findings,
    rowKey: r => r.id
  })));
}
window.ComplianceScreen = ComplianceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/ComplianceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/DashboardScreen.jsx
try { (() => {
function DashboardScreen() {
  const {
    StatCard,
    Card,
    Badge,
    Button,
    DataTable,
    PageHeader
  } = DS;
  const alerts = [{
    who: "Capt. Niran S.",
    what: "CFI license",
    due: "18 Jul 2026",
    tone: "danger",
    status: "Due Soon"
  }, {
    who: "HS-TIF (C172)",
    what: "100-hr inspection",
    due: "22 Jul 2026",
    tone: "warning",
    status: "Due Soon"
  }, {
    who: "Somchai P. (STD-0142)",
    what: "Class 1 medical",
    due: "02 Aug 2026",
    tone: "warning",
    status: "Due Soon"
  }];
  const sessions = [{
    time: "08:00",
    type: "Flight",
    student: "Kanya W.",
    instructor: "Capt. Niran",
    resource: "HS-TIF · C172",
    status: "Completed",
    tone: "info"
  }, {
    time: "10:30",
    type: "Simulator",
    student: "Anon S.",
    instructor: "Capt. Preecha",
    resource: "FNPT II",
    status: "Active",
    tone: "success"
  }, {
    time: "13:00",
    type: "Ground",
    student: "CPL Group B",
    instructor: "A. Wichai",
    resource: "Room 2",
    status: "Scheduled",
    tone: "info"
  }, {
    time: "15:30",
    type: "Flight",
    student: "Preeda C.",
    instructor: "Capt. Niran",
    resource: "HS-TIG · PA-28",
    status: "Scheduled",
    tone: "info"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Report Module",
    title: "Management Dashboard",
    meta: "Thursday 3 Jul 2026 \xB7 data refreshed 5 min ago",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "download"
      })
    }, "Export report")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Active students",
    value: "128",
    delta: "+4 this week",
    deltaTone: "positive"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Fleet hours (MTD)",
    value: "1,240.5",
    unit: "hrs",
    footer: "Across 6 aircraft"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Outstanding balance",
    value: "\u0E3F1.42M",
    delta: "12 invoices",
    deltaTone: "negative"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Expiring items",
    value: "3",
    delta: "within 30 days",
    deltaTone: "negative"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Compliance Alerts",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "View all"),
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, alerts.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 20px",
      borderBottom: i < alerts.length - 1 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, a.who), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, a.what, " \xB7 expires ", a.due)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone,
    dot: true
  }, a.status))))), /*#__PURE__*/React.createElement(Card, {
    title: "Today's Sessions",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Open schedule"),
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      id: "time",
      label: "Time",
      mono: true,
      width: 60
    }, {
      id: "type",
      label: "Type",
      width: 80
    }, {
      id: "student",
      label: "Student",
      nowrap: true
    }, {
      id: "instructor",
      label: "Instructor",
      nowrap: true
    }, {
      id: "resource",
      label: "Resource",
      mono: true,
      nowrap: true
    }, {
      id: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)
    }],
    rows: sessions
  }))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/ExecutiveDashboard.jsx
try { (() => {
function ExecutiveDashboard() {
  const {
    PageHeader,
    Button,
    Card,
    Badge,
    StatCard
  } = DS;

  // 6 C-level lines (COO/CTO/CCO/CFO/CBO/SCM) — read from each module's report service
  const lines = [{
    area: "Operations (COO)",
    value: "94%",
    label: "Dispatch rate today",
    delta: "1 AOG · HS-TIK",
    tone: "negative",
    icon: "tower-control"
  }, {
    area: "Training (CTO)",
    value: "128",
    label: "Active students",
    delta: "6 behind syllabus",
    tone: "negative",
    icon: "graduation-cap"
  }, {
    area: "Commercial (CCO)",
    value: "฿4.2M",
    label: "Revenue pipeline",
    delta: "82% of Q3 target",
    tone: "positive",
    icon: "trending-up"
  }, {
    area: "Finance (CFO)",
    value: "฿1.42M",
    label: "Outstanding balance",
    delta: "12 invoices overdue",
    tone: "negative",
    icon: "receipt"
  }, {
    area: "Assurance (CBO)",
    value: "3",
    label: "Open high risks",
    delta: "1 above appetite",
    tone: "negative",
    icon: "activity"
  }, {
    area: "Safety & Compliance",
    value: "2",
    label: "Open findings",
    delta: "1 regulatory",
    tone: "negative",
    icon: "shield-check"
  }];
  const regAlerts = [{
    what: "Postholder vacant — Safety Manager",
    detail: "Required position unfilled 4 days · CAAT report due",
    tone: "danger",
    tag: "Postholder"
  }, {
    what: "ATO Certificate renewal",
    detail: "AOC-TIF-018 expires 12 Sep 2026 · 70 days",
    tone: "warning",
    tag: "Cert"
  }, {
    what: "CFI license — Capt. Niran S.",
    detail: "CFI-TH-0921 expires 18 Jul 2026 · 15 days",
    tone: "danger",
    tag: "License"
  }, {
    what: "FSTD authorization — FNPT II",
    detail: "FSTD-044 recurrent eval 30 Nov 2026 · 150 days",
    tone: "success",
    tag: "FSTD"
  }];
  const approvals = [{
    id: "APV-2026-0231",
    subject: "Major maintenance deferral — HS-TIM annual",
    from: "DM · Somsak",
    age: "2 days",
    tone: "warning"
  }, {
    id: "APV-2026-0229",
    subject: "Syllabus revision — CPL Nav phase (CAAT)",
    from: "CTO · via DS",
    age: "1 day",
    tone: "info"
  }, {
    id: "APV-2026-0227",
    subject: "Q3 marketing campaign budget ฿480K",
    from: "CCO",
    age: "3 days",
    tone: "info"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Executive \xB7 Accountable Manager",
    title: "Executive Dashboard",
    meta: "Thursday 3 Jul 2026 \xB7 all divisions \xB7 live",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "clipboard-check"
      })
    }, "Management review"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "download"
      })
    }, "Org risk summary"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12
    }
  }, lines.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.area,
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-md)",
      flexShrink: 0,
      background: "var(--navy-050)",
      color: "var(--navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: l.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, l.area), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-stat)",
      color: "var(--text-heading)"
    }
  }, l.value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      marginTop: 2,
      color: l.tone === "negative" ? "var(--status-danger-fg)" : "var(--status-success-fg)"
    }
  }, l.delta)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Regulatory Alerts",
    padding: 0,
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      dot: true
    }, "2 critical")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, regAlerts.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 20px",
      borderBottom: i < regAlerts.length - 1 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      flexShrink: 0,
      background: a.tone === "danger" ? "var(--status-danger-bg)" : a.tone === "warning" ? "var(--status-warning-bg)" : "var(--status-success-bg)",
      color: a.tone === "danger" ? "var(--status-danger-fg)" : a.tone === "warning" ? "var(--status-warning-fg)" : "var(--status-success-fg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: a.tone === "success" ? "check" : "alert-triangle",
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, a.what), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, a.detail)), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, a.tag))))), /*#__PURE__*/React.createElement(Card, {
    title: "Pending Executive Approval",
    padding: 0,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Open inbox")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, approvals.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      padding: "12px 20px",
      borderBottom: i < approvals.length - 1 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, a.id), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      color: "var(--text-faint)",
      textTransform: "none"
    }
  }, a.age)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)",
      marginTop: 3
    }
  }, a.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, a.from), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Reject"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Approve")))))))));
}
window.ExecutiveDashboard = ExecutiveDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/ExecutiveDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/OperationsScreen.jsx
try { (() => {
function OperationsScreen() {
  const {
    PageHeader,
    Button,
    Card,
    Badge,
    Dialog,
    StatCard
  } = DS;

  // Aircraft availability (Maintenance status feed)
  const fleet = [{
    reg: "HS-TIF",
    type: "C172",
    status: "Serviceable",
    tone: "success"
  }, {
    reg: "HS-TIG",
    type: "PA-28",
    status: "Serviceable",
    tone: "success"
  }, {
    reg: "HS-TIK",
    type: "C172",
    status: "AOG",
    tone: "danger"
  }, {
    reg: "HS-TIM",
    type: "DA-40",
    status: "In Maintenance",
    tone: "warning"
  }, {
    reg: "FNPT II",
    type: "Sim",
    status: "Serviceable",
    tone: "success"
  }];

  // Pre-flight check builder — mirrors Operation Dispatch FR-DSP-PRE (6 gates)
  const mkChecks = over => [{
    label: "Aircraft serviceable",
    detail: "No MEL beyond mission scope",
    ...over.ac
  }, {
    label: "Maintenance release (CRS)",
    detail: "Signed after last work order",
    ...over.crs
  }, {
    label: "Aircraft documents valid",
    detail: "CofA · insurance",
    ...over.docs
  }, {
    label: "Instructor qualification",
    detail: "Covers lesson type · duty limit OK",
    ...over.inst
  }, {
    label: "Student medical & docs",
    detail: "Class 1 medical valid",
    ...over.stu
  }, {
    label: "Weather / restriction",
    detail: "Within mission minima",
    ...over.wx
  }];
  const allOk = {
    ac: {
      ok: true
    },
    crs: {
      ok: true
    },
    docs: {
      ok: true
    },
    inst: {
      ok: true
    },
    stu: {
      ok: true
    },
    wx: {
      ok: true
    }
  };
  const initial = {
    planned: [{
      id: "SLT-2026-000481",
      t: "13:00",
      type: "Flight",
      who: "Preeda C.",
      inst: "Capt. Niran",
      res: "HS-TIK · C172",
      tone: "info",
      checks: mkChecks({
        ...allOk,
        ac: {
          ok: false,
          detail: "HS-TIK is AOG — bird strike, grounded"
        }
      })
    }, {
      id: "SLT-2026-000482",
      t: "15:30",
      type: "Flight",
      who: "Wirat B.",
      inst: "Capt. Preecha",
      res: "HS-TIF · C172",
      tone: "info",
      checks: mkChecks({
        ...allOk,
        stu: {
          ok: false,
          detail: "Class 1 medical expired 28 Jun 2026"
        }
      })
    }, {
      id: "SLT-2026-000483",
      t: "16:00",
      type: "Simulator",
      who: "Anon S.",
      inst: "Capt. Preecha",
      res: "FNPT II",
      tone: "info",
      checks: mkChecks(allOk)
    }],
    dispatched: [{
      id: "SLT-2026-000479",
      t: "10:30",
      type: "Flight",
      who: "Kanya W.",
      inst: "Capt. Niran",
      res: "HS-TIG · PA-28",
      tone: "info"
    }],
    airborne: [{
      id: "SLT-2026-000478",
      t: "09:15",
      type: "Flight",
      who: "Somchai P.",
      inst: "Capt. Niran",
      res: "HS-TIF · C172",
      tone: "success",
      eta: "ETA 11:00"
    }],
    closed: [{
      id: "SLT-2026-000476",
      t: "08:00",
      type: "Simulator",
      who: "Kanya W.",
      inst: "Capt. Preecha",
      res: "FNPT II",
      tone: "neutral",
      hrs: "1.5 hrs logged"
    }, {
      id: "SLT-2026-000475",
      t: "07:30",
      type: "Flight",
      who: "Preeda C.",
      inst: "Capt. Niran",
      res: "HS-TIG · PA-28",
      tone: "danger",
      cancelled: "Cancelled — weather"
    }]
  };
  const [board, setBoard] = React.useState(initial);
  const [active, setActive] = React.useState(null); // slot in dispatch dialog

  const lanes = [{
    id: "planned",
    label: "Planned",
    accent: "var(--slate-400)"
  }, {
    id: "dispatched",
    label: "Dispatched",
    accent: "var(--sky-600)"
  }, {
    id: "airborne",
    label: "Airborne",
    accent: "var(--green-600)"
  }, {
    id: "closed",
    label: "Closed",
    accent: "var(--slate-500)"
  }];
  const typeTint = {
    Flight: "var(--navy-600)",
    Simulator: "var(--sky-600)",
    Ground: "var(--slate-500)"
  };
  const dispatchOk = active && active.checks.every(c => c.ok);
  function doDispatch() {
    setBoard(b => ({
      ...b,
      planned: b.planned.filter(s => s.id !== active.id),
      dispatched: [...b.dispatched, {
        ...active,
        tone: "info"
      }]
    }));
    setActive(null);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Operations Module \xB7 Dispatch",
    title: "Daily Operations Board",
    meta: "Thursday 3 Jul 2026 \xB7 VTBD \xB7 live",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "calendar"
      })
    }, "3 Jul 2026"), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "plus"
      })
    }, "New slot"))
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Aircraft Availability",
    padding: 0,
    style: {
      marginBottom: 12
    },
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, "from Maintenance status")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      padding: "14px 20px"
    }
  }, fleet.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.reg,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      background: a.tone === "danger" ? "var(--status-danger-bg)" : a.tone === "warning" ? "var(--status-warning-bg)" : "var(--surface-card)",
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      color: "var(--text-heading)",
      fontWeight: 500
    }
  }, a.reg), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      color: "var(--text-faint)",
      textTransform: "none"
    }
  }, a.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: a.tone,
    dot: true
  }, a.status))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 10
    }
  }, lanes.map(lane => /*#__PURE__*/React.createElement("div", {
    key: lane.id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 4px 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: lane.accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, lane.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      color: "var(--text-faint)"
    }
  }, board[lane.id].length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minHeight: 120
    }
  }, board[lane.id].map(s => {
    const clickable = lane.id === "planned";
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: clickable ? () => setActive(s) : undefined,
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderLeft: `3px solid ${typeTint[s.type]}`,
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-card)",
        padding: "10px 12px",
        cursor: clickable ? "pointer" : "default"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-data)",
        fontWeight: 500,
        color: "var(--text-heading)"
      }
    }, s.t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-overline)",
        color: "var(--text-faint)",
        textTransform: "none",
        fontFamily: "var(--font-mono)"
      }
    }, s.res)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-body)",
        marginTop: 4
      }
    }, s.who), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, s.inst, " \xB7 ", s.type), s.eta && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, s.eta)), s.hrs && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        font: "var(--type-overline)",
        color: "var(--status-success-fg)",
        textTransform: "none"
      }
    }, "\u2713 ", s.hrs), s.cancelled && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      dot: true
    }, s.cancelled)), clickable && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        textTransform: "uppercase",
        color: "var(--text-link)"
      }
    }, "Run pre-flight \u2192"));
  }))))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!active,
    onClose: () => setActive(null),
    width: 480,
    title: active ? `Pre-flight — ${active.t} · ${active.res}` : "",
    footer: active && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        font: "var(--type-body-sm)",
        color: dispatchOk ? "var(--status-success-fg)" : "var(--status-danger-fg)",
        display: "flex",
        alignItems: "center"
      }
    }, dispatchOk ? "All checks passed" : "Dispatch blocked — 1 or more checks failed"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setActive(null)
    }, "Cancel"), dispatchOk ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: doDispatch,
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "plane-takeoff"
      })
    }, "Dispatch") : /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      disabled: true,
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "ban"
      })
    }, "Dispatch"))
  }, active && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, active.who, " \xB7 ", active.inst, " \xB7 slot ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, active.id)), active.checks.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "10px 0",
      borderBottom: i < active.checks.length - 1 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      flexShrink: 0,
      marginTop: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: c.ok ? "var(--status-success-bg)" : "var(--status-danger-bg)",
      color: c.ok ? "var(--status-success-fg)" : "var(--status-danger-fg)"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: c.ok ? "check" : "x",
    size: 13
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: c.ok ? "var(--text-muted)" : "var(--status-danger-fg)"
    }
  }, c.detail)))), !dispatchOk && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "10px 12px",
      borderRadius: "var(--radius-md)",
      background: "var(--status-danger-bg)",
      color: "var(--status-danger-fg)",
      font: "var(--type-body-sm)",
      display: "flex",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "shield-alert",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, "Hard block per CAAT dispatch rule. Override requires DO authority and is logged to the audit trail + Safety.")))));
}
window.OperationsScreen = OperationsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/OperationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/ScheduleScreen.jsx
try { (() => {
function ScheduleScreen() {
  const {
    PageHeader,
    Button,
    Card,
    Badge,
    Select
  } = DS;
  const days = ["Mon 29 Jun", "Tue 30 Jun", "Wed 1 Jul", "Thu 2 Jul", "Fri 3 Jul"];
  const typeColor = {
    Flight: {
      background: "var(--navy-050)",
      borderLeft: "3px solid var(--navy-600)"
    },
    Simulator: {
      background: "var(--sky-100)",
      borderLeft: "3px solid var(--sky-600)"
    },
    Ground: {
      background: "var(--slate-100)",
      borderLeft: "3px solid var(--slate-500)"
    }
  };
  const sessions = {
    0: [{
      t: "08:00",
      type: "Flight",
      who: "Kanya W. · Capt. Niran",
      res: "HS-TIF"
    }, {
      t: "13:00",
      type: "Ground",
      who: "CPL Group B · A. Wichai",
      res: "Room 2"
    }],
    1: [{
      t: "09:30",
      type: "Simulator",
      who: "Anon S. · Capt. Preecha",
      res: "FNPT II"
    }],
    2: [{
      t: "08:00",
      type: "Flight",
      who: "Preeda C. · Capt. Niran",
      res: "HS-TIG"
    }, {
      t: "10:30",
      type: "Flight",
      who: "Wirat B. · Capt. Preecha",
      res: "HS-TIF"
    }, {
      t: "15:00",
      type: "Ground",
      who: "PPL Group A · A. Wichai",
      res: "Room 1"
    }],
    3: [{
      t: "11:00",
      type: "Simulator",
      who: "Somchai P. · Capt. Preecha",
      res: "FNPT II"
    }],
    4: [{
      t: "08:00",
      type: "Flight",
      who: "Kanya W. · Capt. Niran",
      res: "HS-TIF"
    }, {
      t: "10:30",
      type: "Simulator",
      who: "Anon S. · Capt. Preecha",
      res: "FNPT II"
    }, {
      t: "13:00",
      type: "Ground",
      who: "CPL Group B · A. Wichai",
      res: "Room 2"
    }]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Training Module",
    title: "Class Schedule",
    meta: "Week 27 \xB7 29 Jun \u2013 3 Jul 2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
      options: ["All instructors", "Capt. Niran", "Capt. Preecha", "A. Wichai"],
      style: {
        width: 160
      }
    }), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "plus"
      })
    }, "New session"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 12,
      alignItems: "center",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: "var(--navy-600)",
      borderRadius: 2
    }
  }), "Flight"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: "var(--sky-600)",
      borderRadius: 2
    }
  }), "Simulator"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: "var(--slate-500)",
      borderRadius: 2
    }
  }), "Ground")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 8
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement(Card, {
    key: d,
    padding: 0,
    style: {
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px",
      borderBottom: "1px solid var(--border-default)",
      font: "var(--type-label)",
      color: i === 4 ? "var(--navy-700)" : "var(--text-heading)",
      background: i === 4 ? "var(--navy-050)" : "transparent",
      borderRadius: "var(--radius-lg) var(--radius-lg) 0 0"
    }
  }, d, i === 4 ? " · Today" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: 8
    }
  }, (sessions[i] || []).map((s, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      padding: "8px 10px",
      borderRadius: "var(--radius-sm)",
      ...typeColor[s.type]
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)",
      fontFamily: "var(--font-mono)"
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)"
    }
  }, s.res)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)",
      marginTop: 2
    }
  }, s.who))))))));
}
window.ScheduleScreen = ScheduleScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/ScheduleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/StudentProgressScreen.jsx
try { (() => {
function StudentProgressScreen() {
  const {
    PageHeader,
    Button,
    Card,
    Badge
  } = DS;
  const hours = [{
    label: "Flight",
    done: 142.5,
    req: 200,
    tint: "var(--navy-600)"
  }, {
    label: "Simulator",
    done: 28.0,
    req: 40,
    tint: "var(--sky-600)"
  }, {
    label: "Ground",
    done: 96,
    req: 120,
    tint: "var(--slate-500)"
  }];
  const phases = [{
    name: "Phase 1 — Basic Handling",
    state: "done",
    lessons: [{
      code: "F-01",
      title: "Effects of controls",
      grade: "4/4",
      state: "done"
    }, {
      code: "F-04",
      title: "Circuits & landings",
      grade: "4/4",
      state: "done"
    }]
  }, {
    name: "Phase 2 — Instrument",
    state: "done",
    lessons: [{
      code: "F-12",
      title: "Basic instrument flight",
      grade: "3/4",
      state: "done"
    }, {
      code: "S-03",
      title: "IFR procedures (sim)",
      grade: "4/4",
      state: "done"
    }]
  }, {
    name: "Phase 3 — Navigation",
    state: "active",
    lessons: [{
      code: "F-18",
      title: "Cross-country planning",
      grade: "3/4",
      state: "done"
    }, {
      code: "F-19",
      title: "Dual nav — VTBD–VTBU",
      grade: "—",
      state: "active"
    }, {
      code: "F-20",
      title: "Solo nav qualifying",
      grade: "—",
      state: "blocked",
      note: "Medical expired — blocked"
    }]
  }, {
    name: "Phase 4 — Checkride Prep",
    state: "pending",
    lessons: [{
      code: "F-25",
      title: "CPL skill test prep",
      grade: "—",
      state: "pending"
    }]
  }];
  const credentials = [{
    item: "Class 1 Medical",
    ref: "MED-1-4471",
    tone: "danger",
    status: "Expired 28 Jun"
  }, {
    item: "Student Pilot License",
    ref: "SPL-TH-2231",
    tone: "success",
    status: "Valid"
  }, {
    item: "Passport / Visa",
    ref: "P-8841203",
    tone: "success",
    status: "Valid"
  }];
  const stateDot = {
    done: "var(--green-600)",
    active: "var(--sky-600)",
    blocked: "var(--red-600)",
    pending: "var(--slate-300)"
  };
  const stateBadge = {
    done: ["success", "Passed"],
    active: ["info", "In progress"],
    blocked: ["danger", "Blocked"],
    pending: ["neutral", "Pending"]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Training Admin \xB7 Student Progress",
    title: "Somchai Prasert",
    meta: "STD-0142 \xB7 CPL(A) Integrated \xB7 Batch 2026-A \xB7 enrolled 14 Jan 2026",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "file-text"
      })
    }, "Training record"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "calendar-plus"
      })
    }, "Schedule lesson"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      marginBottom: 12,
      borderRadius: "var(--radius-md)",
      background: "var(--status-danger-bg)",
      color: "var(--status-danger-fg)",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "alert-triangle",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Exception:"), " Class 1 medical expired \u2014 solo navigation (F-20) is hard-blocked until renewed. Forecast completion slips ~3 weeks.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Syllabus Progress",
    padding: 0,
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "info",
      dot: true
    }, "Phase 3 of 4 \xB7 68%")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 16px"
    }
  }, phases.map((p, pi) => /*#__PURE__*/React.createElement("div", {
    key: pi,
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: stateDot[p.state],
      border: p.state === "pending" ? "2px solid var(--slate-300)" : "none",
      flexShrink: 0
    }
  }), pi < phases.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      flex: 1,
      background: "var(--border-default)",
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: pi < phases.length - 1 ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "12px 0 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-section-title)",
      color: p.state === "pending" ? "var(--text-faint)" : "var(--text-heading)"
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, p.lessons.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.code,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 10px",
      borderRadius: "var(--radius-sm)",
      background: l.state === "blocked" ? "var(--status-danger-bg)" : "var(--slate-050)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      width: 34
    }
  }, l.code), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, l.title, l.note && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger-fg)"
    }
  }, " \xB7 ", l.note)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-data)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, l.grade), /*#__PURE__*/React.createElement(Badge, {
    tone: stateBadge[l.state][0],
    dot: true
  }, stateBadge[l.state][1]))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Hours Logged",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 20px"
    }
  }, hours.map(h => {
    const pct = Math.round(h.done / h.req * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: h.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        color: "var(--text-heading)"
      }
    }, h.label), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-data)",
        color: "var(--text-muted)"
      }
    }, h.done.toFixed(1), " / ", h.req, " hrs")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 999,
        background: "var(--slate-100)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + "%",
        height: "100%",
        background: h.tint,
        borderRadius: 999
      }
    })));
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Credentials",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, credentials.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.ref,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 20px",
      borderBottom: i < credentials.length - 1 ? "1px solid var(--border-default)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-heading)"
    }
  }, c.item), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-data)",
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, c.ref)), /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone,
    dot: true
  }, c.status))))))));
}
window.StudentProgressScreen = StudentProgressScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/StudentProgressScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/StudentsScreen.jsx
try { (() => {
function StudentsScreen() {
  const {
    PageHeader,
    Button,
    Tabs,
    Card,
    DataTable,
    Badge,
    Input,
    Select,
    Dialog,
    Tag
  } = DS;
  const [tab, setTab] = React.useState("all");
  const [selected, setSelected] = React.useState(null);
  const rows = [{
    id: "STD-0142",
    name: "Somchai Prasert",
    course: "CPL",
    phase: "Phase 3 — Nav",
    hours: "182.5",
    status: "Active",
    tone: "success",
    balance: "฿0.00",
    docs: "Complete"
  }, {
    id: "STD-0139",
    name: "Kanya Wattana",
    course: "PPL",
    phase: "Phase 1 — Basic",
    hours: "44.0",
    status: "Pending",
    tone: "warning",
    balance: "฿85,000.00",
    docs: "Visa expiring"
  }, {
    id: "STD-0131",
    name: "Anon Srisuwan",
    course: "IR",
    phase: "Phase 2 — Instrument",
    hours: "96.3",
    status: "Overdue",
    tone: "danger",
    balance: "฿120,500.00",
    docs: "Complete"
  }, {
    id: "STD-0128",
    name: "Preeda Chaiyasit",
    course: "CPL",
    phase: "Phase 4 — Checkride",
    hours: "201.8",
    status: "Active",
    tone: "success",
    balance: "฿12,000.00",
    docs: "Medical due"
  }, {
    id: "STD-0117",
    name: "Malee Thongdee",
    course: "ME",
    phase: "Completed",
    hours: "310.2",
    status: "Completed",
    tone: "info",
    balance: "฿0.00",
    docs: "Complete"
  }, {
    id: "STD-0111",
    name: "Wirat Boonmee",
    course: "CPL",
    phase: "Phase 2 — Instrument",
    hours: "121.7",
    status: "Active",
    tone: "success",
    balance: "฿45,000.00",
    docs: "Complete"
  }];
  const filtered = tab === "all" ? rows : rows.filter(r => r.status.toLowerCase() === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    overline: "Student Module",
    title: "Students",
    meta: "128 enrolled \xB7 6 shown",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "download"
      })
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(LIcon, {
        name: "plus"
      })
    }, "New enrollment"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-end",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search name or ID\u2026",
    prefix: /*#__PURE__*/React.createElement(LIcon, {
      name: "search",
      size: 14
    }),
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ["All courses", "PPL", "CPL", "IR", "ME"],
    style: {
      width: 140
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Batch: 2026-A")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: "all",
      label: "All",
      count: rows.length
    }, {
      id: "active",
      label: "Active"
    }, {
      id: "pending",
      label: "Pending"
    }, {
      id: "overdue",
      label: "Overdue"
    }],
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      id: "id",
      label: "ID",
      mono: true,
      width: 100
    }, {
      id: "name",
      label: "Student",
      nowrap: true
    }, {
      id: "course",
      label: "Course",
      width: 70
    }, {
      id: "phase",
      label: "Progress",
      nowrap: true
    }, {
      id: "hours",
      label: "Hours",
      mono: true,
      align: "right"
    }, {
      id: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      id: "balance",
      label: "Balance",
      mono: true,
      align: "right"
    }],
    rows: filtered,
    rowKey: r => r.id,
    onRowClick: setSelected
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: !!selected,
    title: selected ? `${selected.name} · ${selected.id}` : "",
    onClose: () => setSelected(null),
    width: 480,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSelected(null)
    }, "Close"), /*#__PURE__*/React.createElement(Button, null, "Open full record"))
  }, selected && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, [["Course", selected.course], ["Progress", selected.phase], ["Flight hours", selected.hours + " hrs"], ["Balance", selected.balance], ["Documents", selected.docs], ["Status", selected.status]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, v))))));
}
window.StudentsScreen = StudentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/StudentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/erp/shared.jsx
try { (() => {
const DS = window.AviCoreDesignSystem_de3db9;
function LIcon({
  name,
  size = 16
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          "stroke-width": 1.5
        },
        nameAttr: "data-lucide"
      });
    }
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      lineHeight: 0
    }
  });
}

// Roles the user can sign in as — drives nav filtering + landing screen
const ROLES = {
  ceo_am: {
    label: "Accountable Manager",
    user: "Capt. Preecha N.",
    initials: "PN",
    home: "executive"
  },
  do: {
    label: "Director of Operations",
    user: "Somsak Thongchai",
    initials: "ST",
    home: "operations"
  },
  dispatcher: {
    label: "Dispatcher",
    user: "Nattaya Rojana",
    initials: "NR",
    home: "operations"
  },
  training_admin: {
    label: "Training Admin",
    user: "Kanya Wattana",
    initials: "KW",
    home: "students"
  },
  scm: {
    label: "Safety & Compliance",
    user: "Dr. Anong K.",
    initials: "AK",
    home: "compliance"
  }
};
function Topbar({
  title,
  roleId
}) {
  const r = ROLES[roleId] || ROLES.ceo_am;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--topbar-height)",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 24px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-muted)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 32,
      padding: "0 10px",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      color: "var(--text-faint)",
      font: "var(--type-body-sm)",
      width: 240
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "search",
    size: 14
  }), " Search records\u2026"), /*#__PURE__*/React.createElement(DS.IconButton, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "var(--navy-100)",
      color: "var(--navy-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "var(--type-overline)"
    }
  }, r.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, r.user)));
}

// Each nav item lists the roles that may see it
const NAV_SECTIONS = [{
  items: [{
    id: "executive",
    label: "Executive Dashboard",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "crown",
      size: 18
    }),
    roles: ["ceo_am"]
  }, {
    id: "dashboard",
    label: "Dashboard",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "layout-dashboard",
      size: 18
    }),
    roles: ["do", "training_admin", "scm"]
  }]
}, {
  label: "Operations",
  items: [{
    id: "operations",
    label: "Daily Ops Board",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "tower-control",
      size: 18
    }),
    roles: ["ceo_am", "do", "dispatcher"]
  }, {
    id: "schedule",
    label: "Training Schedule",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "calendar-days",
      size: 18
    }),
    roles: ["ceo_am", "do", "training_admin"]
  }]
}, {
  label: "Training",
  items: [{
    id: "students",
    label: "Students",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "graduation-cap",
      size: 18
    }),
    roles: ["ceo_am", "training_admin"]
  }, {
    id: "progress",
    label: "Student Progress",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "line-chart",
      size: 18
    }),
    roles: ["ceo_am", "training_admin"]
  }]
}, {
  label: "Safety & Compliance",
  items: [{
    id: "compliance",
    label: "Compliance & CAAT",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "shield-check",
      size: 18
    }),
    badge: 3,
    roles: ["ceo_am", "scm", "training_admin"]
  }]
}, {
  label: "Back Office",
  items: [{
    id: "hr",
    label: "HR",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "users",
      size: 18
    }),
    roles: ["ceo_am"]
  }, {
    id: "finance",
    label: "Finance",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "receipt",
      size: 18
    }),
    roles: ["ceo_am"]
  }, {
    id: "inventory",
    label: "Inventory",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "boxes",
      size: 18
    }),
    roles: ["ceo_am"]
  }, {
    id: "documents",
    label: "Documents",
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "folder-check",
      size: 18
    }),
    roles: ["ceo_am"]
  }]
}];
function navForRole(roleId) {
  return NAV_SECTIONS.map(s => ({
    ...s,
    items: s.items.filter(it => it.roles.includes(roleId))
  })).filter(s => s.items.length > 0);
}
const SCREEN_TITLES = {
  executive: "Executive · Accountable Manager",
  dashboard: "Overview",
  operations: "Operations Module",
  students: "Student Management",
  progress: "Student Progress",
  schedule: "Training Module",
  compliance: "Compliance Module",
  hr: "HR Module",
  finance: "Finance Module",
  inventory: "Inventory Module",
  documents: "Document Control"
};
function Placeholder({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 24,
      padding: 48,
      textAlign: "center",
      border: "1px dashed var(--border-strong)",
      borderRadius: "var(--radius-lg)",
      color: "var(--text-faint)",
      font: "var(--type-body)"
    }
  }, label, " \u2014 module screen not recreated in this kit.");
}
Object.assign(window, {
  DS,
  LIcon,
  Topbar,
  NAV_SECTIONS,
  navForRole,
  ROLES,
  SCREEN_TITLES,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
